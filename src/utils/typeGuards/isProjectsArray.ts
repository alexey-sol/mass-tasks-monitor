import Project from "types/Project";
import firebase from "utils/firebase/firebase";
import isProject from "utils/typeGuards/isProject";

function isProjectsArray (
    items: firebase.firestore.DocumentData[] = []
): items is Project[] {
    return items.every(item => isProject(item));
}

export default isProjectsArray;
