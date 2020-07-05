import React from "react";
import classnames from "classnames";

import { Props, defaultProps } from "./ProgressBar.conf";
import taskStates from "utils/const/taskStates";
import styles from "./ProgressBar.module.scss";

const { DONE, FAILED, IN_PROGRESS } = taskStates;

const ProgressBar = ({
    taskStatus
}: Props) => {
    const {
        Progress = 100,
        State
    } = taskStatus;

    const dynamicStyle = {
        width: `${Progress}%`
    };

    return (
        <div
            className={classnames(styles.container, getStateClassName(State))}
            style={dynamicStyle}
        />
    );
};

ProgressBar.defaultProps = defaultProps;

export default ProgressBar;

function getStateClassName (state: string) {
    switch (state) {
        case DONE:
            return styles.done;
        case FAILED:
            return styles.failed;
        case IN_PROGRESS:
            return styles.inProgress;
        default:
            return "";
    }
}
