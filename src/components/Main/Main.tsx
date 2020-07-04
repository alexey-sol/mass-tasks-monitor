import React from "react";

import { Props, defaultProps } from "./Main.conf";
import styles from "./Main.module.scss";

const Main = ({
    children
}: Props) => {
    return (
        <main className={styles.container}>
            { children }
        </main>
    );
};

Main.defaultProps = defaultProps;

export default Main;
