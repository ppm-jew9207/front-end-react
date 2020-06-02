import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../helpers/AppContext';
const PrivateRoute = ({ children, ...rest }) => {
  const context = useContext(AppContext);
  console.log(context.state.userId);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        context.state.userId !== undefined ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
