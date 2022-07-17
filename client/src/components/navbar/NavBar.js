import React from 'react';

import { Link as RouterLink } from "react-router-dom";

import {
    withRouter
} from "react-router-dom";

import {
    useMediaQuery
} from "react-responsive";

import {
    Link,
} from 'react-scroll';

import * as ReactGA from "react-ga";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            navBackground: "navbar navbar-expand-lg",
            navLink: "nav-link",
            navBrand: "navbar-brand",
            navMenu: "fi-rr-menu-burger navbar"
        };
    }

    componentDidMount() {
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 70 ? "navbar navbar-expand-lg" : "navbar active navbar-expand-lg";
            const linkcolor = window.scrollY < 70 ? "nav-link" : "nav-link active-navbar";
            const brandcolor = window.scrollY < 70 ? "navbar-brand" : "navbar-brand active-navbar";
            const menucolor = window.scrollY < 40 ? "fi-rr-menu-burger navbar" : "fi-rr-menu-burger active navbar";

            this.setState({ navBackground: backgroundcolor, navLink: linkcolor, navBrand: brandcolor, navMenu: menucolor });
        });
    }

    render() {
        return (
            <nav className={this.state.navBackground}>
                <a
                    href="/"
                    className={this.state.navBrand}
                    onClick={evt => {
                        ReactGA.event({
                            category: 'Landing BCF',
                            action: 'Click Big Career Fest. Online',
                            label: 'NavBar'
                        });
                    }}>
                    Big Career Fest. Online
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <i className={this.state.navMenu}></i>
                    </span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarText">
                    <ul className="navbar-nav ml-auto mr-auto"/>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <Link
                            activeClass="active"
                            className="test2"
                            to="education"
                            spy={true}
                            smooth={true}
                            duration={800}
                        >
                            <a
                                onClick={evt => {
                                    ReactGA.event({
                                        category: 'Landing BCF',
                                        action: 'Click Activities',
                                        label: 'NavBar'
                                    });
                                }}
                                className={this.state.navLink}
                            >
                                Навчання
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            className="test2"
                            to={"companies"}
                            spy={true}
                            smooth={true}
                            duration={800}
                        >
                            <a
                                onClick={evt => {
                                    ReactGA.event({
                                        category: 'Landing BCF / NavBar',
                                        action: 'Click Companies',
                                    });
                                }}
                                className={this.state.navLink}
                            >
                                Компанії
                            </a>
                        </Link>
                    </li>

                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="test2"
                                to={"organizators"}
                                spy={true}
                                smooth={true}
                                duration={800}
                            >
                                <a
                                    onClick={evt => {
                                        ReactGA.event({
                                            category: 'Landing BCF / NavBar',
                                            action: 'Click Companies',
                                        });
                                    }}
                                    className={this.state.navLink}
                                >
                                   Організатори
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="test2"
                                to={"registration"}
                                spy={true}
                                smooth={true}
                                duration={800}
                            >
                                <button className="registration-button-navbar">
                                    Реєстрація
                                </button>
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}