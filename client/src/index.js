import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import "./stylesheets/App.css";
import "./stylesheets/greetings.css";
import "./stylesheets/educationParts.css";
import "./stylesheets/registration.css";
import "./stylesheets/gainsEducation.css";
import "./stylesheets/companies.css";
import "./stylesheets/logotypes.css";
import "./stylesheets/mobile.css";
import "./stylesheets/organizators.css";
import "./stylesheets/navbar.css";
import App from './javascript/App';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
