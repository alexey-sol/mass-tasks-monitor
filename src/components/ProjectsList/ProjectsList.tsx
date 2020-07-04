import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";

import { Context } from "context/Projects";
import BaseButton from "components/BaseButton";
import normalizeProjectName from "utils/helpers/normalizeProjectName";
import pathnames from "utils/const/pathnames";
import styles from "./ProjectsList.module.scss";

const ProjectsList = () => {
    const {
        fetchProjects,
        projects
    } = React.useContext(Context);

    const { current: doFetchProjects } = useRef(fetchProjects);

    useEffect(() => {
        doFetchProjects();
    }, [doFetchProjects]);

    const buttonElems = projects.map(({ name }) => {
        const normalizedName = normalizeProjectName(name);
        const to = `${pathnames.PROJECTS}/${normalizedName}`;

        return (
            <Link
                key={normalizedName}
                to={to}
            >
                <BaseButton
                    className={styles.button}
                    text={name}
                />
            </Link>
        );
    });

    return (
        <section className={styles.container}>
            {buttonElems}
        </section>
    );
};

export default ProjectsList;
