import React from 'react';
import { Link } from 'react-scroll';

import asterisk from "../../images/asterisk.png"
import { Element } from 'react-scroll'

class Organizators extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Element name="organizators" className="element" >
            <div className="container-fluid background-organizators padding-bottom-blocks">
                <div className="row center-row">
                    <div className="col-12 col-md-10 col-lg-8 center-row">
                        <p className="title-block-text-organizators">Хто організовує Big Career Fest?</p>
                    </div>
                </div>
                <div className="row center-row">
                    <div className="organizators-logo-div-button-image">
                        <div className="center-row">
                            <div className="organizators-logo-wrapper">
                                <div className="company-organizators" id="logo-highers"/>
                            </div>
                        </div>
                        <div className="button-div-organizators">
                            <a className="button-link-organizators" href="https://t.me/higherspro">
                                <button className="button-channel-organizators highers">
                                    Перейти на канал
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="col-11 col-md-12 col-lg-6 column-margin-organizators">
                        <p className="title-text-organizators highers">
                            HIGHERS
                        </p>
                        <p className="secondary-text-organizators">
                            Сервіс поширення кар'єрних можливостей для покоління Z
                        </p>
                        <div>
                            <div className="organizators-block-details-text">
                                <img src={asterisk} className="asterisk-organizators"/>
                                <p className="thirdly-text-organizators">Ми збираємо найкращі кар'єрні можливості для студентів від топових компаній України.</p>
                            </div>
                            <div className="organizators-block-details-text">
                                <img src={asterisk} className="asterisk-organizators"/>
                                <p className="thirdly-text-organizators">Також ми допомагаємо створювати резюме та надаємо консультації щодо проходження співбесід</p>
                            </div>
                            <div className="organizators-block-details-text">
                                <img src={asterisk} className="asterisk-organizators"/>
                                <p className="thirdly-text-organizators"><span className="bold-text-organizators">Підписуйся на наш Telegram-канал</span> та будуй успішну кар'єру!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row center-row">
                    <div className="col-11 col-md-10 col-lg-8">
                        <div className="linewrapper"/>
                    </div>
                </div>

                <div className="row center-row">
                    <div className="organizators-logo-div-button-image">
                        <div className="center-row">
                            <div className="organizators-logo-wrapper">
                                <div className="company-organizators" id="logo-naukma"/>
                            </div>
                        </div>
                        <div className="button-div-organizators">
                            <a className="button-link-organizators" href="https://t.me/jccnaukma">
                                <button className="button-channel-organizators highers">
                                    Перейти на канал
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="col-11 col-md-12 col-lg-6 column-margin-organizators">
                        <p className="title-text-organizators mohylianka">
                            Mohylianka Job&Career Center
                        </p>
                        <p className="secondary-text-organizators mohylianka">
                            Центр кар'єри та працевлаштування студентів та випускників
                        </p>
                        <div>
                            <div className="organizators-block-details-text">
                                <img src={asterisk} className="asterisk-organizators"/>
                                <p className="thirdly-text-organizators">Перший в Україні центр системної підтримки студентів та випускників в їхньому професійному становленні.</p>
                            </div>
                            <div className="organizators-block-details-text">
                                <img src={asterisk} className="asterisk-organizators"/>
                                <p className="thirdly-text-organizators">Майстер класи від профі, освітні проєкти від топових компаній, вакансії та програми стажування - все це на нашому каналі.</p>
                            </div>
                            <div className="organizators-block-details-text">
                                <img src={asterisk} className="asterisk-organizators"/>
                                <p className="thirdly-text-organizators"><span className="bold-text-organizators">Підписуйся на Telegram-канал</span> та використовуй кожну можливість!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row center-row">
                    <div className="col-12 col-md-10 col-lg-8 column-not-main-button center-row">
                        <Link activeClass="active" className="test1" to="registration" spy={true} smooth={true} duration={500} >
                            <button className="button-main-registrate">Реєстрація</button>
                        </Link>
                    </div>
                </div>
            </div>
            </Element>
        );
    }
}

export default Organizators;