import React from 'react';
import {UserIcon, LockIcon} from "../icons/FontIcons";

const RegisterForm = () => {
return(
    <div className='form-container'>
    <h2>Register</h2>
    <form id="register">
        <div className="input-container">
        <UserIcon />
        <input type="text" name="username" placeholder="username" />
        </div>
        <div className="input-container">
        <LockIcon />
        <input type="email" name="email" placeholder="E-mail address" />
        </div>
        <div>
            <input className="button" type="submit" value="Register"/>
        </div>
       
    </form> 
</div>
);
}

export default RegisterForm;