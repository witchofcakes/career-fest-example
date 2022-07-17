import React from 'react';
import { Link } from 'react-scroll';
import BlockCompanies from "../companies/BlockCompanies";
import { Element } from 'react-scroll'

class CompaniesBlocks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Element name="companies" className="element" >
            <div className="container padding-bottom-blocks">
                <div className="row center-row">
                    <div className="col-12 col-md-10 col-8 center-row">
                        <p className="title-block-text">Які компанії беруть участь?</p>
                    </div>
                </div>
                <div className="row center-row">
                    <div className="col-12 col-md-10 col-lg-10 center-row">
                        <p className="title-block-secondary-text-companies">
                            Тільки ті працедавці, які пропонують швидке кар’єрне зростання, навчання, гідну оплату праці та комфортні умови для роботи
                        </p>
                    </div>
                </div>
                <div className="row center-row">
                    <div className="col-11 col-md-10 col-lg-5 center-row">
                        <div className="click-companies-block">
                            <div className="click-icon-companies">
                                <i className="fi-rr-interactive companies"></i>
                            </div>
                            <div className="click-icon-companies-text">
                                <p className="title-block-thirdly-text">
                                    <span className="red-span-companies">Клікай на логотипи</span>, щоб дізнатись основне про компанію та переглянути вакансії
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <BlockCompanies/>

                <div className="row center-row">
                    <div className="col-12 col-md-10 col-8 column-not-main-button center-row">
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

export default CompaniesBlocks;