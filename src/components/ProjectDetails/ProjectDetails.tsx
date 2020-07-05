import React, { useEffect, useState } from "react";

import { Props, defaultProps } from "./ProjectDetails.conf";
import ProjectTask from "types/ProjectTask";
import Spinner from "components/Spinner";
import TaskInfo from "components/TaskInfo";
import extractProjectTasks from "utils/helpers/extractProjectTasks";
import fetchTasks from "utils/api/fetchTasks";
import styles from "./ProjectDetails.module.scss";

const ProjectDetails = ({
    project
}: Props) => {
    const projectId = project.Id;
    const [projectTasks, setProjectTasks] = useState<ProjectTask[]>([]);

    useEffect(() => {
        const getProjectTasks = async () => {
            const fetchedTasks = await fetchTasks();
            const fetchedProjectTasks = extractProjectTasks(fetchedTasks, projectId);
            setProjectTasks(fetchedProjectTasks);
        };

        getProjectTasks();
    }, [projectId]);

    const projectTaskElems = projectTasks.map(task => (
        <TaskInfo
            key={task.TaskType}
            projectTask={task}
        />
    ));

    const elem = (
        <table className={styles.container}>
            <thead className={styles.header}>
                <tr>
                    <th>Type</th>
                    <th className={styles.statusCell}>Status</th>
                    <th>Description</th>
                </tr>
            </thead>

            <tbody>
                {projectTaskElems}
            </tbody>
        </table>
    );

    const isPending = projectTasks.length === 0;

    return (isPending)
        ? <Spinner />
        : elem;
};

ProjectDetails.defaultProps = defaultProps;

export default ProjectDetails;
