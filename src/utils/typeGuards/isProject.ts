import Project from "types/Project";
import isObject from "utils/typeGuards/isObject";
import isOfType from "utils/typeGuards/isOfType";

function isProject (
    objectToCheck: unknown
): objectToCheck is Project {
    if (!isObject(objectToCheck)) {
        return false;
    }

    const { Name } = objectToCheck;
    const isValidObject = isOfType<Project>(objectToCheck, "Name");

    return (
        isValidObject &&
        typeof Name === "string"
    );
}

export default isProject;
