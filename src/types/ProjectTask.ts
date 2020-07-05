import requiredParametersTypes from "utils/const/requiredParametersTypes";
import Indexer from "types/Indexer";
import TaskStatus from "types/TaskStatus";

const { NUMBER, STRING } = requiredParametersTypes;
type RequiredParameter = typeof NUMBER | typeof STRING;

interface ProjectTask {
    Desc: string;
    RequiredParameters: Indexer<RequiredParameter>;
    TaskStatus?: TaskStatus;
    TaskType: string;
}

export default ProjectTask;
