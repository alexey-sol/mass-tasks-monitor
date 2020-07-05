import collections from "utils/const/collections";
import findDocuments from "utils/firebase/findDocuments";
import isTasksArray from "utils/typeGuards/isTasksArray";

export default async () => {
    const { TASKS } = collections;
    const fetchedTasks = await findDocuments(TASKS);

    if (isTasksArray(fetchedTasks)) {
        return fetchedTasks;
    }

    console.error("Tasks array is invalid");
    return [];
};
