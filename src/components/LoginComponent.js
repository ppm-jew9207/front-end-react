import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserIcon, LockIcon } from '../icons/FontAwesomeIcons';
import { AppContext } from '../helpers/AppContext';

const LoginComponent = () => {
  let history = useHistory();
  const context = useContext(AppContext);

  const submitForm = () => {
    context.login();
    history.push(`/profile/${context.state.userId}`);
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form id="login" onSubmit={submitForm}>
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
          <a href="#" className="lost-password">
            Lost your password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
