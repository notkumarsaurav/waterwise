import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import './Login.css'; // Import your updated CSS file

function Login({ onLogIn, onShowSignUp }) {
  const [emailOrPhoneLogin, setEmailOrPhoneLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log('Google login success:', credentialResponse);
    // TODO: proceed with login or update auth state
  };

  const handleGoogleLoginError = () => {
    alert('Google login failed.');
  };

  const handleFacebookResponse = (response) => {
    console.log('Facebook login response:', response);
    // TODO: proceed with Facebook login logic
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h2 className="login-title">Log In</h2>
        <input
          className="login-input"
          type="text"
          placeholder="email or phone no."
          value={emailOrPhoneLogin}
          onChange={(e) => setEmailOrPhoneLogin(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" onClick={() => onLogIn(emailOrPhoneLogin, password)}>
          Log In
        </button>

        <p>
          Don't have an account?{' '}
          <button className="link-btn" onClick={onShowSignUp}>
            Sign Up
          </button>
        </p>

        <div className="social-login-container">
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
            width="100%"
          />

          <FacebookLogin
            appId="YOUR_FACEBOOK_APP_ID"
            fields="name,email,picture"
            callback={handleFacebookResponse}
            cssClass="facebook-btn"
            textButton="Sign in with Facebook"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
