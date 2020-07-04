import React from "react";

import ProjectsList from "components/ProjectsList";
import styles from "./Home.module.scss";

function Home () {
    return (
        <section className={styles.container}>
            <header className={styles.header}>
                Projects to monitor:
            </header>

            <ProjectsList />
        </section>
    );
}

export default Home;
