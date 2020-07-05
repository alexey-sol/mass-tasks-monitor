import TaskStatus from "types/TaskStatus";

export interface Props {
    taskStatus: TaskStatus;
}

export const defaultProps = {
    taskStatus: {}
} as Partial<Props>;
