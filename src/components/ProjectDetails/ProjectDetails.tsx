import { withRouter } from "react-router-dom";

import React, {
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";

import { Props } from "./ProjectDetails.conf";
import Project from "types/Project";
import ProjectTask from "types/ProjectTask";
import Spinner from "components/Spinner";
import TaskInfo from "components/TaskInfo";
import extractProjectTasks from "utils/helpers/extractProjectTasks";
import fetchProjects from "utils/api/fetchProjects";
import fetchTasks from "utils/api/fetchTasks";
import styles from "./ProjectDetails.module.scss";

const ProjectDetails = ({
    match
}: Props) => {
    const { projectId } = match.params;

    const [project, setProject] = useState<Project | undefined>(undefined);
    const [projectTasks, setProjectTasks] = useState<ProjectTask[]>([]);

    const timerRef = useRef<number | null>(null);

    const getProjectTasks = useCallback(async () => {
        const fetchedTasks = await fetchTasks();
        const fetchedProjectTasks = extractProjectTasks(fetchedTasks, projectId);
        setProjectTasks(fetchedProjectTasks);
    }, [projectId]);

    useEffect(() => {
        const getProject = async () => {
            const projects = await fetchProjects();
            const chosenProject = projects.find(({ Id }) => Id === projectId);
            setProject(chosenProject);
        };

        getProject();
        getProjectTasks();
    }, [getProjectTasks, projectId]);

    useEffect(() => {
        timerRef.current = window.setTimeout(async function myTimer () {
            await getProjectTasks();
            timerRef.current = window.setTimeout(myTimer, 1000);
        }, 1000);

        return () => {
            window.clearTimeout(timerRef.current as number);
        };
    }, [getProjectTasks, projectId]);

    const projectTaskElems = projectTasks.map(task => (
        <TaskInfo
            key={task.TaskType}
            projectTask={task}
        />
    ));

    const elem = (
        <section className={styles.container}>
            <header className={styles.header}>
                {project?.Name}
            </header>

            <table className={styles.table}>
                <thead>
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
        </section>
    );

    const isPending = projectTasks.length === 0 || !project;

    return (isPending)
        ? <Spinner />
        : elem;
};

export default withRouter(ProjectDetails);
