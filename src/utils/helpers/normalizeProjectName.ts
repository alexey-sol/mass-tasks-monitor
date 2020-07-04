export default (projectName: string): string => {
    return projectName
        .toLowerCase()
        .split(" ")
        .join("-");
};
