import React, { useState } from "react";

import { Props, defaultProps } from "./TaskInfo.conf";
import BaseButton from "components/BaseButton";
import Indexer from "types/Indexer";
import Popup from "components/Popup";
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
    const [showPopup, setShowPopup] = useState(false);

    const startTask = (data: Indexer) => {
        setShowStartTask(false);
        setShowPopup(true);

        console.log(
            data,
            "Submitting the form. Let's pretend that the button in the Type column " +
            "has disappeared and there's now a progress bar in the relevant Status " +
            "field."
        );
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

            {showPopup && (
                <Popup
                    onClose={() => setShowPopup(false)}
                    text="Starting task"
                    theme="success"
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
