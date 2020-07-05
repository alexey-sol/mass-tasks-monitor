import React, { useState } from "react";

import { Props, defaultProps } from "./TaskInfo.conf";
import BaseButton from "components/BaseButton";
import ProgressBar from "components/ProgressBar";
import StartTaskDialog from "components/StartTaskDialog";
import taskStates from "utils/const/taskStates";
import styles from "./TaskInfo.module.scss";

const { DONE, FAILED, IN_PROGRESS } = taskStates;

const TaskInfo = ({
    projectTask
}: Props) => {
    const { Desc, TaskStatus, TaskType } = projectTask;
    const { Progress, State } = TaskStatus || {};
    const stateDescription = getStateDescription(State, Progress);

    const [showStartTask, setShowStartTask] = useState(false);

    const startTask = () => {
        setShowStartTask(false);
        console.log("Submitting form");
    };

    const startTaskButton = (
        <BaseButton
            className={styles.button}
            onClick={() => setShowStartTask(true)}
            text={TaskType}
        />
    );

    return (
        <tr key={TaskType}>
            <td className={(TaskStatus) ? "" : styles.withoutPadding}>
                {TaskStatus
                    ? TaskType
                    : startTaskButton}
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

            {showStartTask && (
                <StartTaskDialog
                    onClose={() => setShowStartTask(false)}
                    projectTask={projectTask}
                    startTask={startTask}
                />
            )}
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
