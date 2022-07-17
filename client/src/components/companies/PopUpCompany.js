import React from 'react';

import {
    Link,
} from "react-router-dom";

import {
    Animated
} from "react-animated-css";

import {
    Tab,
    Tabs,
    TabList,
    TabPanel
} from 'react-tabs';

import Popup from "reactjs-popup";

import 'react-tabs/style/react-tabs.css';

import Linkify from 'react-linkify'
import * as ReactGA from "react-ga";

import srcX from '../../images/icons/modified/x.svg';
import srcXBlack from '../../images/icons/modified/x_black.svg';

export default class PopUpCompany extends React.Component {
    render() {
        return (
            <Popup
                modal
                onOpen={evt =>
                    ReactGA.event({
                        category: 'Landing BCF',
                        action: `Click Card ${this.props.company}`,
                        label: 'Block Companies'
                    })
                }
                disabled={this.props.disabled || this.props.url || false}
                lockScroll={true}
                closeOnDocumentClick
                trigger={
                    this.props.url
                        ? (
                            <Link
                                target={"_blank"}
                                to={{
                                    pathname: this.props.url
                                }}
                            >
                                <div
                                    id={"button-modal"}
                                    className="landing-company-div-card">
                                    <div className="row row-icon-block">
                                        <div className="col-12">
                                            <div id={
                                                this.props.disabled ?
                                                    "company-wrapper-disabled"
                                                :
                                                    "company-wrapper"
                                            }>
                                                <div
                                                    className={"company"}
                                                    id={this.props.image}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <div
                                style={{
                                    cursor: "pointer"
                                }}
                                id={"button-modal"}
                                className="landing-company-div-card">
                                <div className="row row-icon-block">
                                    <div className="col-12">
                                        <div id={
                                            this.props.disabled ?
                                                "company-wrapper-disabled"
                                                :
                                                "company-wrapper"
                                        }>
                                            <div
                                                className={"company"}
                                                id={this.props.image}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                }
            >
                {close => (
                    <div>
                        <a className="close row-mobile" onClick={close}>
                            <img
                                src={srcXBlack}
                                className="close-icon"
                                alt={"close-popup"}
                            />
                        </a>
                        <a className="close row-desktop" onClick={close}>
                            <img
                                src={srcX}
                                className="close-icon"
                                alt={"close-popup"}
                            />
                        </a>

                        <div className="row">
                            <div className="col-12 col-lg-12 row-center no-gutters-desktop">
                                <div
                                    className={"company-wrapper-popup"}
                                    id={this.props.image}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-lg-12 margin-top-company-mobile">
                                <div className="company-name-popup font-weight-500">
                                    {this.props.company}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-lg-12 row-center">
                                <a
                                    target={"_blank"}
                                    href={this.props.standLink}>
                                    <button
                                        className={
                                            this.props.standLink
                                                ? "virtual-stand-button font-weight-500"
                                                : "virtual-stand-button disabled font-weight-500"
                                        }>
                                        Година з компанією
                                    </button>
                                </a>

                            </div>
                        </div>

                        <div className="row center-row">
                            <div className="col-12 col-lg-5 row-center">
                                <p className="access-hour-popup">
                                    Доступ до навчання відкриється зареєстрованим учасникам в день заходу
                                </p>
                            </div>
                        </div>

                        <Tabs className="company-tabs">
                            <TabList>
                                <Tab>
                                    <span className="font-weight-500">
                                        Про компанію
                                    </span>
                                </Tab>
                                {(() => {
                                    if (this.props.vacancies)
                                        return (
                                            <Tab>
                                                <span className="font-weight-500">
                                                    Вакансії компанії
                                                </span>
                                            </Tab>
                                        );
                                })()}
                                {/*{(() => {*/}
                                {/*    if (this.props.botLink)*/}
                                {/*        return (*/}
                                {/*            <Tab>*/}
                                {/*                <span className="font-weight-500">*/}
                                {/*                    Бот компанії*/}
                                {/*                </span>*/}
                                {/*            </Tab>*/}
                                {/*        );*/}
                                {/*})()}*/}
                            </TabList>

                            <TabPanel>
                                <div className="row">
                                    <div className="col-12">
                                        <Linkify>
                                            <div
                                                className="description-company font-weight-400">
                                                {this.props.longDescription}
                                            </div>
                                        </Linkify>
                                    </div>
                                </div>
                            </TabPanel>

                            {(() => {
                                if (this.props.vacancies)
                                    return (
                                        <TabPanel>
                                            <div className="container-fluid row row-center description-company">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <Linkify>
                                                            <div
                                                                className="description-company font-weight-400">
                                                                {this.props.vacancies}
                                                            </div>
                                                        </Linkify>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    );
                            })()}

                            {/*{(() => {*/}
                            {/*    if (this.props.botLink) {*/}
                            {/*        return (*/}
                            {/*            <TabPanel>*/}
                            {/*                <div className="container-fluid row row-center description-company">*/}
                            {/*                    <div className="row">*/}
                            {/*                        <div className="col-12">*/}
                            {/*                            <Linkify>*/}
                            {/*                                <div*/}
                            {/*                                    className="description-company font-weight-400">*/}
                            {/*                                    Хей! Команда BigCareerFest.Online розробила саме для тебе класного бота компанії.*/}
                            {/*                                    Не гай часу, переходь за посиланням - ти зможеш знайти ще багато чого цікавого про компанію та її можливості :D*/}
                            {/*                                </div>*/}
                            {/*                            </Linkify>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}

                            {/*                    <div className="row margin-top-20">*/}
                            {/*                        <div className="col-12 text-center">*/}
                            {/*                            <a*/}
                            {/*                                target={"_blank"}*/}
                            {/*                                href={this.props.botLink}>*/}
                            {/*                                <button*/}
                            {/*                                    className="virtual-stand-button font-weight-500">*/}
                            {/*                                    Почати діалог з ботом*/}
                            {/*                                </button>*/}
                            {/*                            </a>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </TabPanel>*/}
                            {/*        );*/}
                            {/*    }*/}
                            {/*})()}*/}
                        </Tabs>
                    </div>
                )}
            </Popup>
        );
    }
}
