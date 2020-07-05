import collections from "utils/const/collections";
import findDocuments from "utils/firebase/findDocuments";
import isProjectsArray from "utils/typeGuards/isProjectsArray";

export default async () => {
    const { PROJECTS } = collections;
    const fetchedProjects = await findDocuments(PROJECTS);

    if (isProjectsArray(fetchedProjects)) {
        return fetchedProjects;
    }

    console.error("Projects array is invalid");
    return [];
};
