import React, { memo, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";

import { Props, defaultProps } from "./BaseOverlay.conf";
import styles from "./BaseOverlay.module.scss";

const BaseOverlay = ({
    children,
    onClose,
    rootClassName
}: Props) => {
    const rootRef = useRef(null);

    const handleMouseDownOnRoot = (event: React.MouseEvent) => {
        const targetIsRoot = event.target === rootRef.current;
        if (targetIsRoot) onClose();
    };

    const overlayElem = (
        <section
            className={classnames(rootClassName, styles.root)}
            onMouseDown={handleMouseDownOnRoot}
            ref={rootRef}
        >
            {children}
        </section>
    );

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKeydown);
        return () => document.removeEventListener("keydown", handleKeydown);
    }, [onClose]);

    return ReactDOM.createPortal(
        overlayElem,
        document.body
    );
};

BaseOverlay.defaultProps = defaultProps;

export default memo(BaseOverlay);
