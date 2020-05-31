import React from 'react';
import {UserIcon, LockIcon} from "../icons/FontIcons";

const LoginForm = () => {
    return (
        <div className='form-container'>
            <h2>Login</h2>
            <form id="login">
                <div className="input-container">
                <UserIcon />
                <input type="text" name="username" placeholder="username" />
                </div>
                <div className="input-container">
                <LockIcon />
                <input type="password" name="username" placeholder="password" />
                </div>
                <div>
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember" className="remember-me">Remember me</label>
                </div>
                <div>
                    <input className="button" type="submit" value="login"/>
                    <a href="#" className="lost">Lost your password?</a>
                </div>
               
            </form> 
        </div>
    );
};

export default LoginForm;