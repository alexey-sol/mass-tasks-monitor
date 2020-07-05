import TaskStatus from "types/TaskStatus";
import isObject from "utils/typeGuards/isObject";
import isOfType from "utils/typeGuards/isOfType";

function isTaskStatus (
    objectToCheck: unknown
): objectToCheck is TaskStatus {
    if (!isObject(objectToCheck)) {
        return false;
    }

    const { Progress, State, TaskId } = objectToCheck;
    const isValidObject = isOfType<TaskStatus>(objectToCheck, "State");

    const progressIsValid = (Progress)
        ? typeof Progress === "number"
        : true;

    return (
        isValidObject &&
        progressIsValid &&
        typeof State === "string" &&
        typeof TaskId === "string"
    );
}

export default isTaskStatus;
