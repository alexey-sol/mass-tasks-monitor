import Project from "types/Project";
import isObject from "utils/typeGuards/isObject";
import isOfType from "utils/typeGuards/isOfType";

function isProject (
    objectToCheck: unknown
): objectToCheck is Project {
    if (!isObject(objectToCheck)) {
        return false;
    }

    const { name } = objectToCheck;
    const isValidObject = isOfType<Project>(objectToCheck, "name");

    return (
        isValidObject &&
        typeof name === "string"
    );
}

export default isProject;
