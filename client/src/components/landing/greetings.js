import React from 'react';
import { Link } from 'react-scroll';

class GreetingsBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid greetings-block">
                <div className="row center-row">
                    <div className="col-12 col-md-10 col-8 center-row">
                        <p className="name-text-main">BIG CAREER FEST</p>
                    </div>
                </div>
                <div className="row center-row">
                    <div className="col-12 col-md-10 col-8 center-row">
                        <p className="name-secondary-text-main">
                            Захід, який навчить тебе будувати кар’єру
                        </p>
                    </div>
                </div>
                <div className="row center-row">
                    <div className="col-12 col-md-10 col-8 center-row">
                        <p className="name-thirdly-text-main">
                            Отримуй знання від 17 найкращих компаній та починай кар’єру вже цього літа.
                        </p>
                    </div>
                </div>
                <div className="desktop-display row center-row">
                    <div className="col-12 col-md-10 col-lg-8 center-row">
                        <div className="main-bullet-box">
                            <div className="small-bullet-box"/>
                            <p className="small-bullet-text">
                                Безкоштовно
                            </p>
                        </div>
                        <div className="main-bullet-box-2">
                            <div className="small-bullet-box"/>
                            <p className="small-bullet-text">
                                Онлайн
                            </p>
                        </div>
                        <div className="main-bullet-box-3">
                            <div className="small-bullet-box"/>
                            <p className="small-bullet-text">
                                10-17 травня
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mobile-display row center-row">
                    <div className="col-12 center-row">
                        <div className="main-bullet-box">
                            <div className="small-bullet-box"/>
                            <p className="small-bullet-text">
                                Безкоштовно
                            </p>
                        </div>
                        <div className="main-bullet-box-2">
                            <div className="small-bullet-box"/>
                            <p className="small-bullet-text">
                                Онлайн
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mobile-display row center-row">
                    <div className="col-6 center-row">
                        <div className="main-bullet-box-3">
                            <div className="small-bullet-box"/>
                            <p className="small-bullet-text">
                                10-17 травня
                            </p>
                        </div>
                    </div>
                </div>


                <div className="row center-row">
                    <div className="col-12 col-lg-8 center-row">
                        <Link activeClass="active" className="test1" to="registration" spy={true} smooth={true} duration={500} >
                            <button className="button-main-registrate">Реєстрація</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default GreetingsBlock;