import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import { Provider as AppStateProvider } from "context/AppState";
import App from "components/App";

const WrappedApp = (
    <AppStateProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AppStateProvider>
);

ReactDOM.render(
    WrappedApp,
    document.getElementById("root")
);
