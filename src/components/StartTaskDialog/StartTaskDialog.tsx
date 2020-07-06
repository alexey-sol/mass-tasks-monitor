import React, { useState } from "react";

import { Props, defaultProps } from "./StartTaskDialog.conf";
import BaseButton from "components/BaseButton";
import BaseDialog from "components/BaseDialog";
import Indexer from "types/Indexer";
import Input from "components/Input";
import requiredParametersTypes from "utils/const/requiredParametersTypes";
import styles from "./StartTaskDialog.module.scss";

const { NUMBER } = requiredParametersTypes;

const StartTaskDialog = ({
    onClose,
    projectTask,
    startTask
}: Props) => {
    const { Desc, RequiredParameters, TaskType } = projectTask;
    const [formData, setFormData] = useState<Indexer<string>>({});

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        startTask(formData);
    };

    const fieldElems = Object
        .entries(RequiredParameters)
        .sort()
        .map(schema => {
            const paramName = schema[0];
            const paramType = schema[1];

            return (
                <section
                    className={styles.formRow}
                    key={paramName}
                >
                    <div className={styles.paramName}>
                        {paramName}
                    </div>

                    <div className={styles.field}>
                        <Input
                            name={paramName}
                            onChange={handleChange}
                            required
                            rootClassName={styles.inputContainer}
                            type={paramType === NUMBER ? "number" : "text"}
                            value={formData[paramName]}
                        />
                    </div>
                </section>
            );
        });

    return (
        <BaseDialog
            className={styles.dialog}
            onClose={onClose}
            title={TaskType}
        >
            <section className={styles.container}>
                <div className={styles.description}>
                    {Desc}
                </div>

                <div className={styles.parametersTitle}>
                    Parameters:
                </div>

                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    {fieldElems}

                    <BaseButton
                        className={styles.button}
                        text="Start task"
                    />
                </form>
            </section>
        </BaseDialog>
    );
};

StartTaskDialog.defaultProps = defaultProps;

export default StartTaskDialog;
