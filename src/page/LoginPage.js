import React from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const LoginPage = () => {
    return <div class="flex-container">
        <LoginForm />
        <div className="separator">
            <label>OR</label>
        </div>
        <RegisterForm />
    </div> 
}

export default LoginPage