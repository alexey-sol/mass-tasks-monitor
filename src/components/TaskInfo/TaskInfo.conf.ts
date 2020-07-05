import ProjectTask from "types/ProjectTask";

export interface Props {
    projectTask: ProjectTask;
}

export const defaultProps = {
    projectTask: {}
} as Partial<Props>;
