import React from 'react';
import GreetingsBlock from "./greetings";
import EducationParts from "./educationParts";
import GainsAfter from "./gainsAfter";
import CompaniesBlocks from "./companiesBlocks";
import Organizators from "./organizators";
import Registration from "./registration/registration";

class FullLanding extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <GreetingsBlock/>
                <EducationParts/>
                <GainsAfter/>
                <CompaniesBlocks/>
                <Organizators/>
                <Registration/>
            </React.Fragment>
        );
    }
}

export default FullLanding;