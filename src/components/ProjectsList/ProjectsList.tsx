import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import BaseButton from "components/BaseButton";
import Project from "types/Project";
import Spinner from "components/Spinner";
import fetchProjects from "utils/api/fetchProjects";
import pathnames from "utils/const/pathnames";
import styles from "./ProjectsList.module.scss";

const ProjectsList = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const doFetchProjects = async () => {
            const fetchedProjects = await fetchProjects();
            setProjects(fetchedProjects);
        };

        doFetchProjects();
    }, []);

    const buttonElems = projects.map(({ Id, Name }) => {
        const to = `${pathnames.PROJECTS}/${Id}`;

        return (
            <Link
                key={Id}
                to={to}
            >
                <BaseButton
                    className={styles.button}
                    text={Name}
                />
            </Link>
        );
    });

    const elem = (
        <section className={styles.container}>
            {buttonElems}
        </section>
    );

    const isPending = projects.length === 0;

    return (isPending)
        ? <Spinner />
        : elem;
};

export default ProjectsList;
