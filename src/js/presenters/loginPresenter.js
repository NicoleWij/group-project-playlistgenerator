import React, { Component } from 'react';
import LoginView from '../views/loginView';

function LoginPresenter(props) {
    let email = '';
    let password = '';
    return (
        <div>
            {<LoginView
                setEmail={text => email = text}
                setPassword={text => password = text}
                RegisterUser={() => {
                    props.loginModel.RegisterUser(email, password)
                }}
                LoginUser={() => {
                    props.loginModel.LoginUser(email, password)
                }}
            />}
        </div>
    );
}

export default LoginPresenter;