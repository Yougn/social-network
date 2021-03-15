import React from 'react';
import { Field } from 'redux-form';
import styles from './formControls.module.css';

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")} >
            <div>
                <textarea {...input} {...props} />
            </div>
            { hasError && <span>{error}</span>}
        </div>

    )
}

export const Input = ({ input, meta: { touched, error }, ...props }) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")} >
            <div>
                <input {...input} {...props} />
            </div>
            { hasError && <span>{error}</span>}
        </div>

    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props} />{text}
    </div>)
