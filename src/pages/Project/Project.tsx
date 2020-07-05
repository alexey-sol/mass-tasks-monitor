import React, { useEffect, useState } from "react";

import { Props } from "./Project.conf";
import ProjectType from "types/Project";
import ProjectDetails from "components/ProjectDetails";
import fetchProjects from "utils/api/fetchProjects";
import styles from "./Project.module.scss";

function Project ({
    match
}: Props) {
    const { projectId } = match.params;
    const [project, setProject] = useState<ProjectType | undefined>(undefined);

    useEffect(() => {
        const getProject = async () => {
            const projects = await fetchProjects();
            const chosenProject = projects.find(({ Id }) => Id === projectId);
            setProject(chosenProject);
        };

        getProject();
    }, [projectId]);

    return (
        <section>
            <header className={styles.header}>
                {project?.Name}
            </header>

            <ProjectDetails project={project} />
        </section>
    );
}

export default Project;
