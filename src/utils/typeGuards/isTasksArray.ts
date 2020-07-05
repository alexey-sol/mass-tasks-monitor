import Task from "types/Task";
import firebase from "utils/firebase/firebase";
import isTask from "utils/typeGuards/isTask";

function isTasksArray (
    items: firebase.firestore.DocumentData[] = []
): items is Task[] {
    return items.every(item => isTask(item));
}

export default isTasksArray;
