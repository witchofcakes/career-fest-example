import React from 'react';
import { Link } from 'react-scroll';

class GainsAfter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid background-gains">
                <div className="row">
                    <div className="container">
                        <div className="row center-row">
                            <div className="col-12 col-md-10 col-8 center-row">
                                <p className="title-block-text-gains">В кінці заходу ти отримаєш:</p>
                            </div>
                        </div>

                        <div className="desktop-display row center-row">
                            <div className="col-12">
                                <div className="row center-row">
                                    <div className="box-circle-gains"/>
                                    <div className="col gains-subblock">
                                        <div className="title-gains-text">
                                            Знання та навички для побудови кар’єри в найкращих компаніях
                                        </div>
                                    </div>
                                    <div className="box-circle-gains"/>
                                    <div className="col gains-subblock">
                                        <div className="title-gains-text">
                                            Ексклюзивні вакансії для старту кар'єри вже цього літа
                                        </div>
                                    </div>
                                    <div className="box-circle-gains"/>
                                    <div className="col gains-subblock">
                                        <div className="title-gains-text">
                                            Сертифікат про отримані знання для твого резюме від працедавців
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mobile-display row center-row">
                            <div className="col-10 display-flex-gains">
                                <div className="box-circle-div-gains">
                                    <div className="box-circle-gains"/>
                                </div>
                                    <div className="title-gains-text">
                                        Знання та навички для побудови кар’єри в найкращих компаніях
                                    </div>
                            </div>
                        </div>

                        <div className="mobile-display row center-row">
                            <div className="col-10 display-flex-gains">
                                <div className="box-circle-div-gains">
                                    <div className="box-circle-gains"/>
                                </div>
                                <div className="title-gains-text">
                                    Ексклюзивні вакансії для старту кар'єри вже цього літа
                                </div>
                            </div>
                        </div>

                        <div className="mobile-display row center-row">
                            <div className="col-10 display-flex-gains">
                                <div className="box-circle-div-gains">
                                    <div className="box-circle-gains"/>
                                </div>
                                <div className="title-gains-text">
                                    Сертифікат про отримані знання для твого резюме від працедавців
                                </div>
                            </div>
                        </div>

                        <div className="row center-row">
                            <div className="col-12 col-md-10 col-8 margin-mobile-less column-not-main-button center-row">
                                <Link activeClass="active" className="test1" to="registration" spy={true} smooth={true} duration={500} >
                                    <button className="button-main-registrate">Реєстрація</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GainsAfter;