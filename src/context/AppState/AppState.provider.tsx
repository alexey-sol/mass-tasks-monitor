import React from "react";

import { Props, defaultProps } from "./AppState.conf";
import { Provider as ProjectsProvider } from "context/Projects";

const AppState = ({
    children
}: Props) => {
    return (
        <ProjectsProvider>
            {children}
        </ProjectsProvider>
    );
};

AppState.defaultProps = defaultProps;

export default AppState;
