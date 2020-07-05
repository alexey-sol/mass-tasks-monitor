import Project from "types/Project";

export interface Props {
    project: Project;
}

export const defaultProps = {
    project: {}
} as Partial<Props>;
