import React from "react";
import classnames from "classnames";

import { Props, defaultProps } from "./Input.conf";
import styles from "./Input.module.scss";

const Input = ({
    className,
    name,
    onChange,
    rootClassName,
    value,
    ...rest
}: Props) => {
    return (
        <div className={rootClassName}>
            <input
                {...rest}
                className={classnames(styles.input, className)}
                name={name}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

Input.defaultProps = defaultProps;

export default Input;
