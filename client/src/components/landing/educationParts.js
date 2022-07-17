import React from 'react';
import { Link } from 'react-scroll';
import education1 from '../../images/education-1.png'
import education2 from '../../images/education-2.png'
import education3 from '../../images/education-3.png'
import ReactCardFlip from 'react-card-flip';
import { Element } from 'react-scroll'

class EducationParts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openLongHour: false,
            openLongLectures: false,
            openLongTests: false,
        };
        this.onClickHours = this.onClickHours.bind(this);
        this.onClickLectures = this.onClickLectures.bind(this);
        this.onClickTests = this.onClickTests.bind(this);
    }

    handleClickFlip(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    onClickHours(e){
        e.preventDefault();
        this.setState(prevState => ({
            openLongHour: !prevState.openLongHour
        }))
    }

    onClickLectures(){
        this.setState({
            openLongLectures: !this.state.openLongLectures
        })
    }

    onClickTests(){
        this.setState({
            openLongTests: !this.state.openLongTests
        })
    }

    render() {
        return (
            <Element name="education" className="element" >
            <div className="container-fluid education-parts-container">
                <div className="row">
                    <div className="container">
                        <div className="row center-row">
                            <div className="col-12 col-md-10 col-8 center-row">
                                <p className="title-block-text">Як побудоване навчання?</p>
                            </div>
                        </div>
                        <div className="row center-row">
                            <div className="col-12 col-md-10 col-8 center-row">
                                <p className="title-block-secondary-text">
                                    Навчання складається з трьох етапів:
                                </p>
                            </div>
                        </div>

                        <div className="row center-row">
                            <div className="col-12 col-md-6 col-lg-4 column-education-blocks">
                                <ReactCardFlip isFlipped={this.state.openLongHour} flipDirection="horizontal">
                                    <div onClick={this.onClickHours} className="education-structure-subblock">
                                        <div className="image-education-block">
                                            <img src={education1} className={"image-education"}/>
                                        </div>
                                        <p className="title-text-subblock">
                                            Година з компанією
                                        </p>
                                        <p className="secondary-text-subblock">
                                            Аналіз роботодавця та правильна презентація себе для працевлаштування.
                                        </p>
                                        <div className="arrow-div-education">
                                            <p className="details-arrow-text">Детальніше</p>
                                            <i className="fi-rr-arrow-right education-block"></i>
                                        </div>
                                    </div>

                                    <div onClick={this.onClickHours} className="education-structure-active-subblock">
                                        <p className="title-text-subblock-active">
                                            Година з компанією &#x2012; youtube-трансляція з представниками компанії
                                        </p>
                                        <p className="secondary-text-subblock-active">
                                            Дізнавайся про те:
                                            <ul>
                                                <li>чим займається компанія,</li>
                                                <li>які умови праці пропонує,</li>
                                                <li>як буде відбуватись робочий процес,</li>
                                                <li>як проходить відбір співробітників,</li>
                                                <li>які можливості пропонує компанія для отримання першого досвіду</li>
                                            </ul>
                                        </p>
                                        <div className="arrow-div-back-education">
                                            <i className="fi-rr-arrow-left education-arrow-back"></i>
                                            <p className="details-back-arrow-text">Повернутись</p>
                                        </div>
                                    </div>
                                </ReactCardFlip>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4 column-education-blocks" onClick={this.onClickLectures}>
                                <ReactCardFlip isFlipped={this.state.openLongLectures} flipDirection="horizontal">
                                    <div onClick={this.onClickLectures} className="education-structure-subblock">
                                        <div className="image-education-block">
                                            <img src={education2} className={"image-education-2"}/>
                                        </div>
                                        <p className="title-text-subblock">
                                            Добірки hard-skills лекцій для працевлаштування
                                        </p>
                                        <p className="secondary-text-subblock">
                                            Лекції від представників компаній, об’єднані за сферами. Hard-skills, які дійсно необхідні майбутнім працедавцям + сертифікат.
                                        </p>
                                        <div className="arrow-div-education">
                                            <p className="details-arrow-text">Детальніше</p>
                                            <i className="fi-rr-arrow-right education-block"></i>
                                        </div>
                                    </div>

                                    <div onClick={this.onClickLectures} className="education-structure-active-subblock">
                                        <p className="title-text-subblock-active">
                                            Добірки hard-skills лекцій &#x2012; онлайн-лекції від представників компаній
                                        </p>
                                        <p className="secondary-text-subblock-active">
                                            Дізнавайся про те:
                                            <ul>
                                                <li>чим займається компанія,</li>
                                                <li>які умови праці пропонує,</li>
                                                <li>як буде відбуватись робочий процес,</li>
                                                <li>як проходить відбір співробітників,</li>
                                                <li>які можливості пропонує компанія для отримання першого досвіду</li>
                                                <li>чим займається компанія,</li>
                                                <li>які умови праці пропонує,</li>
                                                <li>як буде відбуватись робочий процес,</li>
                                            </ul>
                                        </p>
                                        <div className="arrow-div-back-education">
                                            <i className="fi-rr-arrow-left education-arrow-back"></i>
                                            <p className="details-back-arrow-text">Повернутись</p>
                                        </div>
                                    </div>
                                </ReactCardFlip>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4 column-education-blocks" onClick={this.onClickTests}>
                                <ReactCardFlip isFlipped={this.state.openLongTests} flipDirection="horizontal">
                                    <div onClick={this.onClickTests} className="education-structure-subblock">
                                        <div className="image-education-block">
                                            <img src={education3} className={"image-education"}/>
                                        </div>
                                        <p className="title-text-subblock">
                                            Тестування як перший етап відбору і вакансії
                                        </p>
                                        <p className="secondary-text-subblock">
                                            Застосування отриманих знань на практиці та подача на вакансії для студентів
                                        </p>
                                        <div className="arrow-div-education">
                                            <p className="details-arrow-text">Детальніше</p>
                                            <i className="fi-rr-arrow-right education-block"></i>
                                        </div>
                                    </div>

                                    <div onClick={this.onClickTests} className="education-structure-active-subblock">
                                        <p className="title-text-subblock-active">
                                            Тестування &#x2012; youtube-трансляція з представниками компанії
                                        </p>
                                        <p className="secondary-text-subblock-active">
                                            Дізнавайся про те:
                                            <ul>
                                                <li>чим займається компанія,</li>
                                                <li>які умови праці пропонує,</li>
                                                <li>як буде відбуватись робочий процес,</li>
                                                <li>як проходить відбір співробітників,</li>
                                                <li>які можливості пропонує компанія для отримання першого досвіду</li>
                                            </ul>
                                        </p>
                                        <div className="arrow-div-back-education">
                                            <i className="fi-rr-arrow-left education-arrow-back"></i>
                                            <p className="details-back-arrow-text">Повернутись</p>
                                        </div>
                                    </div>
                                </ReactCardFlip>
                            </div>
                        </div>

                        <div className="row center-row">
                            <div className="col-6 column-not-main-button margin-mobile-less center-row">
                                <Link activeClass="active" className="test1" to="registration" spy={true} smooth={true} duration={500} >
                                    <button className="button-main-registrate">Реєстрація</button>
                                </Link>
                            </div>
                        </div>
                        <div className="row center-row">
                            <div className="col-10 col-md-8 col-lg-4 center-row">
                                <p className="details-registration-education-text">
                                    Доступ до навчання відкриється зареєстрованим учасникам 10 травня
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Element>
        );
    }
}

export default EducationParts;