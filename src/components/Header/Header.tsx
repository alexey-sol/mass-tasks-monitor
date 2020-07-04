import { Link } from "react-router-dom";
import React from "react";

import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.container}>
            <section className={styles.content}>
                <Link
                    title="Go to the list of projects"
                    to="/"
                >
                    Mass Tasks
                </Link>
            </section>
        </header>
    );
};

export default Header;
