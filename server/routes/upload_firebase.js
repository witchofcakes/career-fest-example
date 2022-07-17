const express = require('express');
const uploadRouter = express.Router();

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
        fileSize: 20 * 1024 * 1024, // limiting files size to 5 MB
    },
});

uploadRouter.post('/api/upload', uploader.single('cv'), async (req, res, next) => {

    try {
        if (!req.file) {
            res.status(400).send('Error, could not upload file');
            return;
        }

        // Create new blob in the bucket referencing the file
        const blob = bucket.file(req.file.originalname);

        // Create writable stream and specifying file mimetype
        const blobWriter = blob.createWriteStream({
            metadata: {
                contentType: req.file.mimetype,
            },
        });

        blobWriter.on('error', (err) => next(err));

        blobWriter.on('finish', () => {
            // Assembling public URL for accessing the file via HTTP
            const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
                bucket.name
            }/o/${encodeURI(blob.name)}?alt=media`;

            // Return the file name and its public URL
            res
                .status(200)
                .send({ fileName: req.file.originalname, fileLocation: publicUrl });
        });

        // When there is no more data to be consumed from the stream
        blobWriter.end(req.file.buffer);

    } catch (error) {
        res.status(400).send(`Error, could not upload file: ${error}`);
        return;
    }
});

module.exports = uploadRouter;