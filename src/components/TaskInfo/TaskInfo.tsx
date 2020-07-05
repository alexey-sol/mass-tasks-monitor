import React from "react";

import { Props, defaultProps } from "./TaskInfo.conf";
import ProgressBar from "components/ProgressBar";
import taskStates from "utils/const/taskStates";
import styles from "./TaskInfo.module.scss";

const { DONE, FAILED, IN_PROGRESS } = taskStates;

const TaskInfo = ({
    projectTask
}: Props) => {
    const { Desc, TaskStatus, TaskType } = projectTask;
    const { Progress, State } = TaskStatus || {};
    const stateDescription = getStateDescription(State, Progress);

    return (
        <tr key={TaskType}>
            <td>
                {TaskType}
            </td>

            <td className={styles.statusCell}>
                {TaskStatus && (
                    <ProgressBar taskStatus={TaskStatus} />
                )}

                {Boolean(stateDescription) && (
                    <span className={styles.stateDescription}>
                        {stateDescription}
                    </span>
                )}
            </td>

            <td>
                {Desc}
            </td>
        </tr>
    );
};

TaskInfo.defaultProps = defaultProps;

export default TaskInfo;

function getStateDescription (
    state?: string,
    progress?: number
) {
    switch (state) {
        case DONE:
            return "Done";
        case FAILED:
            return "Failed";
        case IN_PROGRESS:
            return `${progress}%`;
        default:
            return "";
    }
}
