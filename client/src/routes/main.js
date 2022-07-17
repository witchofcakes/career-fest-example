import React from "react";

import {
    Route,
    Switch,
    BrowserRouter
} from "react-router-dom";

/* Import Google Analytics wrapper-component */
import GAWrapper from "../components/tools/google/analytics/Wrapper";

import NavBar from "../components/navbar/NavBar";

import FullLanding from "../components/landing/fullLanding";
import Footer from "../components/footer/Footer";
import Test from "../components/test";

const Main = () => (
    <div>
        <NavBar/>
        <BrowserRouter>
            {GAWrapper.init() && <GAWrapper.RouteTracker />}
            <Switch>
                <Route path="/" component={DefaultContainer} />
                <Route path="/test" component={DefaultContainer} />
            </Switch>
        </BrowserRouter>
        <Footer/>
    </div>
);

const DefaultContainer = () => (
    <div>
        {/*<NavBarDuringEvent />*/}
        {/*<NavBarRegistration />*/}
        <Switch>
            <Route exact path="/" component={FullLanding} />
            <Route exact path="/test" component={Test} />
        </Switch>
    </div>
);


export default Main;