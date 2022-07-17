import React from "react";

import Main from "../routes/main.js";

const App = (props) => {
    return (
        <body>
            <div className="page-content" />
            <Main />
        </body>
    );
};

export {
    App as default
};