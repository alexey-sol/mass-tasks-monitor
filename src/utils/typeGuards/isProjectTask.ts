import ProjectTask from "types/ProjectTask";
import isObject from "utils/typeGuards/isObject";
import isOfType from "utils/typeGuards/isOfType";

function isProject (
    objectToCheck: unknown
): objectToCheck is ProjectTask {
    if (!isObject(objectToCheck)) {
        return false;
    }

    const { Desc, RequiredParameters, TaskType } = objectToCheck;
    const isValidObject = isOfType<ProjectTask>(objectToCheck, "TaskType");

    return (
        isValidObject &&
        isObject(RequiredParameters) &&
        typeof Desc === "string" &&
        typeof TaskType === "string"
    );
}

export default isProject;
