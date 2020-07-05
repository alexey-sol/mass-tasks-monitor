import Task from "types/Task";

export default (
    tasks: Task[],
    projectId: string
) => {
    const projectTasks = tasks
        .find(({ ProjectId }) => ProjectId === projectId)
        ?.ProjectTasks;

    return projectTasks || [];
};
