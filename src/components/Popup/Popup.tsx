import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import { Close } from "components/Icon";
import { Props, defaultProps } from "./Popup.conf";
import classnames from "classnames";
import styles from "./Popup.module.scss";

function Popup ({
    onClose,
    text,
    theme
}: Props) {
    const timeoutInMs = 3000;
    const timerRef = useRef<number | null>(null);

    const popupClassName = classnames(
        styles.container,
        styles[`${theme}Theme`]
    );

    useEffect(() => {
        timerRef.current = window.setTimeout(onClose, timeoutInMs);

        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("keydown", handleKeydown);
            window.clearTimeout(timerRef.current as number);
        };
    }, [onClose]);

    const tooltipElem = (
        <div className={popupClassName}>
            <span className={styles.text}>
                {text}
            </span>

            <div
                className={styles.closeIconButton}
                onClick={onClose}
                title="Close"
            >
                <Close />
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        tooltipElem,
        document.body
    );
}

Popup.defaultProps = defaultProps;

export default Popup;
