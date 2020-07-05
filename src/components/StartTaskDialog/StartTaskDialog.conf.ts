import PorjectTask from "types/ProjectTask";

export interface Props {
    onClose(): void;
    projectTask: PorjectTask;
    startTask(): void;
}

export const defaultProps = {
    projectTask: {}
} as Partial<Props>;
