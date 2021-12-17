import React from 'react';
import RegisterView from '../views/registerView';

function RegisterPresenter(props) {
    let email = '';
    let password = '';
    return (
        <div>
            {<RegisterView
                getEmail={text => email = text}
                getPassword={text => password = text}
                RegisterUser={() => {
                    props.model.RegisterUser(email, password)
                }}
            />}
        </div>
    );
}

export default RegisterPresenter;