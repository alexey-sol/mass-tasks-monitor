import React from "react";
import classnames from "classnames";

import { Close } from "components/Icon";
import BaseOverlay from "components/BaseOverlay";
import { Props, defaultProps } from "./BaseDialog.conf";
import styles from "./BaseDialog.module.scss";

const BaseDialog = ({
    children,
    className,
    onClose,
    title
}: Props) => {
    return (
        <BaseOverlay
            onClose={onClose}
            rootClassName={styles.root}
        >
            <section
                className={classnames(styles.container, className)}
                onClick={event => event.stopPropagation()}
            >
                <header className={styles.header}>
                    <div
                        className={styles.closeIconButton}
                        onClick={onClose}
                        title="Close"
                    >
                        <Close />
                    </div>

                    {Boolean(title) && (
                        <span>
                            {title}
                        </span>
                    )}
                </header>

                {children}
            </section>
        </BaseOverlay>
    );
};

BaseDialog.defaultProps = defaultProps;

export default BaseDialog;
