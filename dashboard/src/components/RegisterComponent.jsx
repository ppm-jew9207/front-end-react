import React from 'react'
import { UserIcon, EnvelopeIcon } from '../icons/FontAwesomeIcons';

const RegisterComponent = () => {
    return (
        <div className="form-container">
            <h2>Register</h2>
            <form id="register">
                <div className="input-container">
                    <UserIcon />
                    <input className="input-field" type="text" name="username" placeholder="Username" />
                </div>
                <div className="input-container">
                    <EnvelopeIcon />
                    <input className="input-field" type="email" name="email" placeholder="E-mail Address" />
                </div>
                <div>
                    <input className="input-button" type="submit" value="Register" />
                </div>
            </form>
        </div>
    )
}

export default RegisterComponent