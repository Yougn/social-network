import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { required } from '../../utils/valiodators/validators';
import { createField, Input } from '../common/formControls/formControls';
import { login } from '../../redux/auth-reducer';
import styles from './../common/formControls/formControls.module.css';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, { type: "password" })}
            {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "rememberMe")}

            {captchaUrl && <img src={captchaUrl} alt="Captcha" />}
            {captchaUrl && createField("Symbols from captcha", "captcha", [required], Input, {} )}

            { error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to="/profile" />
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);
