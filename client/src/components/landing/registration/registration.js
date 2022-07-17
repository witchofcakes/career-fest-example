import React, { useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Element } from 'react-scroll'

import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        input: {
            display: 'none',
        },
    },
}));


export default function Registration() {

    const classes = useStyles();

    const [state, setState] = useState({

        isConfirm: true,
        success: false,
        redirect: null,
        errorMsg: null,
        errorStatus: null,
        errorFields: [],
        currentCV: '',

    });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
    const [spec, setSpec] = useState('');

    const onClickConfirmation = (evt) => {

        setState({
            ...state,
            isConfirm: !state.isConfirm
        });

    };

    const onChangeHandler = event=> {

        console.log(event.target.files[0])

        setState({
            ...state,
            currentCV: event.target.files[0]
        });

    }

    const onClickReg = (evt) => {

        evt.preventDefault();

        console.log("States");
        console.log(state.currentCV);
        console.log(name);
        console.log(email);
        console.log(spec);
        console.log(course);

        if(!name || !email || !course){
            console.log("sas")
        }

        else {

            let fileData = new FormData();

            if(state.currentCV) {

                // Setting the 'cv' field and the selected file

                fileData.set(
                    'cv',
                    state.currentCV,
                    `${name}-${email}-${state.currentCV.name}`
                );
            }

            fileData.append("name", name);
            fileData.append("email", email);
            fileData.append("spec", spec);
            fileData.append("course", course);

            axios.post("http://localhost:5000/api/register", fileData).then(function (response) {

                console.log(response.data);

                if(response.data==="Thank you for registration!"){
                    setState({
                        ...state,
                        success: true
                    });

                }
                else{
                    setState({
                        ...state,
                        success: false
                    });
                }

            })
            .catch(function (error) {
                console.log(error);
            })
        }

    };

    return (
        <Element name="registration" className="element" >
            <div className="container padding-bottom-blocks container-registration">
                <div className="row center-row">
                    <div className="col-11 col-md-10 col-lg-8 center-row">
                        <p className="title-block-text">Реєстрація</p>
                    </div>
                </div>
                <div className="row center-row">
                    <div className="col-11 col-md-10 col-lg-6 center-row">
                        <p className="title-block-secondary-text">
                            Реєструйся, щоб взяти участь в заході 10-17 травня та отримати доступ до навчання
                        </p>
                    </div>
                </div>
                <div className="row center-row">
                    <div className="col-11 col-md-8 col-lg-6 center-row">
                        <form className={classes.root} noValidate autoComplete="off">
                            <div>
                                <label className="label-registration-text" >Ім'я*</label>
                                <input placeholder="Петро" className="input-box-registration" onChange={e => setName(e.target.value)}/>
                            </div>
                            <div>
                                <label className="label-registration-text" >Email*</label>
                                <input type="email" placeholder="email@email.com" className="input-box-registration" onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div>
                                <label className="label-registration-text">Курс*</label>
                                <input type="number" placeholder="3" className="input-box-registration" onChange={e => setCourse(e.target.value)}/>
                            </div>
                            <div>
                                <label className="label-resume-registration-text" >Спеціальність&nbsp;</label>
                                <span className="opportunity-registartion" >(впиши сферу, можливості навчання та роботи якої тебе цікавлять  та отримуй найактуальніші пропозиції)</span>
                                <input type="select" className="input-box-registration margin-top-10" placeholder="Маркетинг, програмування" onChange={e => setSpec(e.target.value)}/>
                            </div>
                            <div className="resume-label-div">
                                <label className="label-resume-registration-text">Резюме&nbsp;</label>
                                <span className="opportunity-registartion">(можливість потрапити в базу компаній та отримати роботу, поле необов'язкове)</span>
                            </div>

                            <div>

                                <input
                                    accept="image/*, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                    className="input-upload-file"
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={onChangeHandler}
                                />

                                <label htmlFor="contained-button-file">
                                    <Button className="landing-registration-button-resume" component="span">
                                        <i className="fi-rr-cloud-upload registration"></i>
                                        Завантажити резюме
                                    </Button>
                                </label>

                            </div>

                            {
                                state.success ?
                                    <div className="thanks-for-registration-div">
                                        <p className="thanks-for-registration-text">Реєстрація успішна!</p>
                                        <p className="thanks-for-registration-secondary-text">
                                            Слідкуй за оновленнями заходу в Telegram-каналі та не забувай перевіряти пошту: туди надійдуть посилання на трансляції.
                                        </p>
                                    </div>
                                    :
                                    <React.Fragment>

                                        <div className="row margin-top-20">
                                            <div className="col-12 col-lg-12">
                                                <div className="form-group form-check">

                                                    <input

                                                        id="checkboxConfirmation"
                                                        name={"isConfirm"}
                                                        type="checkbox"
                                                        className="form-check-input active"
                                                        checked={state.isConfirm}
                                                        onChange={onClickConfirmation}
                                                    />

                                                    <label className="form-check-label" htmlFor="checkboxConfirmation">
                                                        Надаю згоду на {' '}
                                                        <a
                                                            className="link-data-registration"
                                                            target={"_blank"}
                                                            href="https://bit.ly/2Yu3Vdl">
                                                            обробку персональних даних
                                                        </a>
                                                    </label>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="button-final-center">
                                            <button className="registrate-final-button" onClick={onClickReg}>Зареєструватись</button>
                                        </div>
                                    </React.Fragment>

                            }

                        </form>
                    </div>
                </div>
            </div>
        </Element>
    );
}