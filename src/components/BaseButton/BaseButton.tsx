import React from "react";
import classnames from "classnames";

import { Props, defaultProps } from "./BaseButton.conf";
import styles from "./BaseButton.module.scss";

function BaseButton ({
    className,
    disabled,
    onClick,
    text,
    ...rest
}: Props) {
    const containerClassName = classnames(
        styles.container,
        className,
        (disabled) ? styles.disabled : ""
    );

    return (
        <button
            {...rest}
            className={containerClassName}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

BaseButton.defaultProps = defaultProps;

export default BaseButton;
