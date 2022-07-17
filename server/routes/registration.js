const express = require('express');
const regRouter = express.Router();
const UUID = require("uuid-v4");

require('dotenv').config();

const { Storage } = require('@google-cloud/storage');

const multer = require('multer');

const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT_ID,
    keyFilename: process.env.GCLOUD_APPLICATION_CREDENTIALS,
});

// Create a bucket associated to Firebase storage bucket
const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET_URL);

// Initiating a memory storage engine to store files as Buffer objects
const uploader = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 30 * 1024 * 1024, // limiting files size to 5 MB
    },
});

var nodemailer = require("nodemailer");

// Load User model
const RegModel = require('../models/RegModel');


const auth = {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
};

const configTransporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    debug: true,
    logger: true,
    auth
});


regRouter.route('/api/register').post( uploader.single('cv'), (req,res) =>{

    const { name, email, course, spec } = req.body;

    let errors = [];

    if (!name || !email || !course ) {
        res.send('Please enter all fields');
        errors.push('Please enter all fields');
    }

    RegModel.findOne({email:email}, function (err, result) {

        if (err) { console.log(err); res.send(err); }

        console.log(result);

        errors.push(err,"Email already exists");

        if (!result) {

            if(req.file)

            {

                let publicUrl = 'saslo';

                let uuid = UUID();

                    // Create new blob in the bucket referencing the file
                    const blob = bucket.file(req.file.originalname);

                    // Create writable stream and specifying file mimetype
                    const blobWriter = blob.createWriteStream({

                        metadata: {
                            contentType: req.file.mimetype,
                            metadata: {
                                firebaseStorageDownloadTokens: uuid
                            }
                        }
                    })

                    blobWriter.on('finish', () => {
                        // Assembling public URL for accessing the file via HTTP
                        publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
                            bucket.name
                        }/o/${encodeURI(blob.name)}?alt=media&token=${uuid}`;

                        console.log("Thi is publicUrl " + publicUrl);

                        // Return the file name and its public URL
                    })
                    // When there is no more data to be consumed from the stream
                    blobWriter.end(req.file.buffer, () =>{

                        console.log("Blob end " + publicUrl)

                        // Send the email
                        var mailOptions = {
                            from: '"Big Career Fest" <bigcareerfest.online@gmail.com>',
                            to: email,
                            subject: 'Thank you for registration!',
                            text: 'Hello,\n\n' + 'Thank you for registration to BigCareerFest' + '.\n'
                        };

                        configTransporter.sendMail(mailOptions, function (err) {

                            if (err) {

                                console.log(err)
                                return res.send('Please enter existing email');

                            } else {

                                const newReg = new RegModel({
                                    name,
                                    email,
                                    course,
                                    spec,
                                    publicUrl,
                                });

                                newReg.save();

                                res.send('Thank you for registration!');
                            }
                        });

                    });

                    console.log(publicUrl);


            }
            else {

                // Send the email
                var mailOptions = {
                    from: '"Big Career Fest" <bigcareerfest.online@gmail.com>',
                    to: email,
                    subject: 'Thank you for registration!',
                    text: 'Hello,\n\n' + 'Thank you for registration to BigCareerFest' + '.\n'
                };

                configTransporter.sendMail(mailOptions, function (err) {

                    let publicUrl = "";

                    if (err) {

                        console.log(err)
                        return res.send('Please enter existing email');

                    } else {

                        const newReg = new RegModel({
                            name,
                            email,
                            course,
                            spec,
                            publicUrl,
                        });

                        newReg.save();

                        res.send('Thank you for registration!');
                    }
                });
            }
        }

        else{
            res.send("User already exist");
        }

    })
})

module.exports = regRouter;