import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './helpers/PrivateRoute';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/auth/ProfilePage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <PrivateRoute path="/profile/:userId">
          <ProfilePage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}
