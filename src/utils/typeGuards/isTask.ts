import Task from "types/Task";
import isObject from "utils/typeGuards/isObject";
import isOfType from "utils/typeGuards/isOfType";

function isProject (
    objectToCheck: unknown
): objectToCheck is Task {
    if (!isObject(objectToCheck)) {
        return false;
    }

    const { ProjectId, ProjectTasks } = objectToCheck;
    const isValidObject = isOfType<Task>(objectToCheck, "ProjectId");

    return (
        isValidObject &&
        typeof ProjectId === "string" &&
        Array.isArray(ProjectTasks)
    );
}

export default isProject;
