import { Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import ErrorBoundary from "components/ErrorBoundary";
import Header from "components/Header";
import Main from "components/Main";
import Spinner from "components/Spinner";
import pathnames from "utils/const/pathnames";
import styles from "./App.module.scss";

const Home = lazy(() => import("pages/Home"));
const Page404 = lazy(() => import("pages/Page404"));
const Project = lazy(() => import("pages/Project"));

const App = () => {
    const { PROJECTS } = pathnames;

    return (
        <section className={styles.container}>
            <Header />

            <Main>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Switch>
                            <Route
                                component={Home}
                                exact
                                path="/"
                            />

                            <Route
                                component={Project}
                                path={`${PROJECTS}/:projectId`}
                            />

                            <Route component={Page404} />
                        </Switch>
                    </Suspense>
                </ErrorBoundary>
            </Main>
        </section>
    );
};

export default App;
