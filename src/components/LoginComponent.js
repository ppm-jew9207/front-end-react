import React, { useContext, useEffect } from 'react';
import { UserIcon, LockIcon } from '../icons/FontAwesomeIcons';
import { AppContext } from '../helpers/AppContext';
import { useHistory } from 'react-router-dom';

const LoginComponent = () => {
  const context = useContext(AppContext);
  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    context.login();
  };

  useEffect(() => {
    console.log(context.userId);
    if (context.userId) {
      history.push(`/profile/${context.userId}`);
    }
  }, [context.userId]);

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
