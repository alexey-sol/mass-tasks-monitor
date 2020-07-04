import React, { Component } from "react";

import { Props, State, defaultProps } from "./ErrorBoundary.conf";
import styles from "./ErrorBoundary.module.scss";

class ErrorBoundary extends Component<Props, State> {
    static defaultProps = defaultProps

    static getDerivedStateFromError (error: Error) {
        return { error };
    }

    constructor (props: Props) {
        super(props);
        this.state = {
            error: null
        };
    }

    componentDidCatch (error: Error) {
        console.error(error);
    }

    renderErrorMessage () {
        return (
            <div className={styles.container}>
                Something went wrong.
            </div>
        );
    }

    render () {
        const { error } = this.state;
        const { children } = this.props;

        return (error)
            ? this.renderErrorMessage()
            : children;
    }
}

export default ErrorBoundary;
