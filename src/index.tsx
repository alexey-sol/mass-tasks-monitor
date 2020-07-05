import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import App from "components/App";

const WrappedApp = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render(
    WrappedApp,
    document.getElementById("root")
);
