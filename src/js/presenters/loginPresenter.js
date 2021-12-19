import React from 'react';
import LoginView from '../views/loginView';

function LoginPresenter(props) {
    let email = '';
    let password = '';
    return (
        <div>
            {<LoginView
                setEmail={text => email = text}
                setPassword={text => password = text}
                LoginUser={() => {return (
                    props.model.LoginUser(email, password))
                }}
            />}
        </div>
    );
}

export default LoginPresenter;