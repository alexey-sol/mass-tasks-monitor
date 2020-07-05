import React from "react";

import { Props, defaultProps } from "./Icon.conf";

function Close ({
    fill,
    size
}: Props) {
    return (
        <svg
            height={size}
            width={size}
        >
            <path
                d="M5.46875 5.46875L19.5312 19.5312"
                stroke={fill}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M5.46875 19.5312L19.5312 5.46875"
                stroke={fill}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

Close.defaultProps = defaultProps;

export default Close;
