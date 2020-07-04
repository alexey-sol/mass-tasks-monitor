import Project from "types/Project";

export interface Context {
    fetchProjects: () => Promise<void>;
    projects: Project[];
}

export interface Props {
    children: React.ReactNode;
}

export const defaultProps = {
    children: null
} as Partial<Props>;
