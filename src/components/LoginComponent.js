import React from 'react'
import { UserIcon, LockIcon } from '../icons/FontAwesomeIcons';

const LoginComponent = () => {
    return (
        <div className="form-container">
            <h2>Login</h2>
            <form id="login">
                <div className="input-container">
                    <UserIcon />
                    <input className="input-field" type="text" name="username" placeholder="Username" />
                </div>
                <div className="input-container">
                    <LockIcon />
                    <input className="input-field" type="password" name="password" placeholder="Password" />
                </div>
                <div className="input-container">
                    <input className="input-checkbox" type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                </div>
                <div>
                    <input className="input-button" type="submit" value="Login" />
                    <a className="lost-password" href="#">
                        Lost your password?
                    </a>
                </div>
            </form>
        </div>
    )
}

export default LoginComponent