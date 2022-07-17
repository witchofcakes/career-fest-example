import React from 'react';

import {
    Redirect
} from "react-router-dom";

import {
    Animated
} from "react-animated-css";

import PopUpCompany from "../PopUpCompany";


class CardCompany extends React.Component {
    render() {
        return (
            <div className="col-12 col-md-6 col-lg-2 padding-top-bottom-companies">
                <PopUpCompany
                    {...this.props}
                    company={this.props.name}
                />
            </div>
        );
    }
}

class CardCompanyMobile extends React.Component {
    render() {
        return (
            <div className="col-6 padding-top-bottom-companies">
                <PopUpCompany
                    {...this.props}
                    company={this.props.name}
                />
            </div>
        );
    }
}

export {
    CardCompany as default,
    CardCompanyMobile
};