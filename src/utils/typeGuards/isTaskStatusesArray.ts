import TaskStatus from "types/TaskStatus";
import firebase from "utils/firebase/firebase";
import isTaskStatus from "utils/typeGuards/isTaskStatus";

function isTaskStatusesArray (
    items: firebase.firestore.DocumentData[] = []
): items is TaskStatus[] {
    return items.every(item => isTaskStatus(item));
}

export default isTaskStatusesArray;
