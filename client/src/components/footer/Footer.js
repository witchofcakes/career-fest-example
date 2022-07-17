import React from "react";

import {
    useMediaQuery
} from "react-responsive";


const Footer = (props) => {
    const isTabletOrMobileDevice
        = useMediaQuery(
        {
            maxDeviceWidth: 1224
        }
    );

    if (isTabletOrMobileDevice)
        return (
            <div className="container-fluid background-footer">
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center no-gutters-desktop">
                                <span className="footer-words font-weight-500">
                                    © Highers, JCC NaUKMA, 2021
                                </span>
                                <br/>
                                <span className="footer-words font-weight-500">
                                    Big Career Fest. Online
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    return (
        <div className="container-fluid background-footer">
            <div className="row">
                <div className="container">
                    <div className="row">
                        <div className="col-6 text-left no-gutters-desktop">
                            <span className="footer-words ml-4 font-weight-500">
                                © Highers, JCC NaUKMA, 2021
                            </span>
                        </div>
                        <div className="col-6 text-right no-gutters">
                            <span className="footer-words mr-4 font-weight-500">
                                Big Career Fest. Online
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Footer;