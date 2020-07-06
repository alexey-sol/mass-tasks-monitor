import Indexer from "types/Indexer";
import PorjectTask from "types/ProjectTask";

export interface Props {
    onClose(): void;
    projectTask: PorjectTask;
    setFetchingIsPaused(value: boolean): void;
    startTask(data: Indexer): void;
}

export const defaultProps = {
    projectTask: {}
} as Partial<Props>;
