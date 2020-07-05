import React, { useState } from "react";

import { Props, defaultProps } from "./Projects.conf";
import Project from "types/Project";
import Context from "./Projects.context";
import collections from "utils/const/collections";
import findDocuments from "utils/firebase/findDocuments";
import isProjectsArray from "utils/typeGuards/isProjectsArray";

const ProjectsProvider = ({
    children
}: Props) => {
    const [projects, setProjects] = useState([] as Project[]);

    const fetchProjects = async () => {
        const fetchedProjects = await findDocuments(collections.PROJECTS);

        if (isProjectsArray(fetchedProjects)) {
            setProjects(fetchedProjects);
        }
    };

    const value = {
        fetchProjects,
        projects
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

ProjectsProvider.defaultProps = defaultProps;

export default ProjectsProvider;
