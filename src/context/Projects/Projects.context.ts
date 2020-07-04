import React from "react";

import { Context } from "./Projects.conf";

export default React.createContext<Context>({
    fetchProjects: async () => {},
    projects: []
});
