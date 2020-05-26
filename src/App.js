import React from 'react';
import LoginPage from './pages/LoginPage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faLock, faEnvelope);

function App() {
  return (
    <LoginPage />
  );
}

export default App;
