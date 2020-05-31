import React from 'react'
import LoginComponent from '../components/LoginComponent'
import RegisterComponent from '../components/RegisterComponent'

const LoginPage = () => {
  return (
    <div className="flex-container">
      I'm good! ;) 
      <LoginComponent />
      <div className="separator">
        <label>OR</label>
      </div>
      <RegisterComponent />
    </div>
  )
}

export default LoginPage
