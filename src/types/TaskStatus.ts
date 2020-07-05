import taskStates from "utils/const/taskStates";

const { DONE, FAILED, IN_PROGRESS } = taskStates;
type State = typeof DONE | typeof FAILED | typeof IN_PROGRESS;

interface ProjectTask {
    Progress?: number;
    State: State;
    TaskId: string;
}

export default ProjectTask;
