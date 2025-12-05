import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import Signup from './components/Signup';
import SignupOtp from './components/SignupOtp';
import ReportProblemButton from './components/ReportProblemButton';
import ReportProblemForm from './components/ReportProblemForm';
import logo from './assets/waterwise-logo.png';
import backgroundShape from './assets/background-shape.png';
import './App.css';

function App() {
  // Splash fade effect
  const [fadeSplash, setFadeSplash] = useState(true);

  // Auth navigation state: 'splash', 'login', 'signup', 'otp', 'main'
  const [authPage, setAuthPage] = useState('splash');
  const [signupEmailOrPhone, setSignupEmailOrPhone] = useState('');

  // Main UI state
  const [isFormVisible, setFormVisible] = useState(false);

  // Splash fade and navigation on mount
  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setFadeSplash(false), 1500);
    const hideTimer = setTimeout(() => setAuthPage('login'), 2500);
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Handlers

  const handleLogin = (emailOrPhone, password) => {
    // TODO: Add auth validation
    setAuthPage('main');
  };

  const handleShowSignup = () => setAuthPage('signup');

  const handleSignup = (emailOrPhone) => {
    setSignupEmailOrPhone(emailOrPhone);
    setAuthPage('otp');
  };

  const handleSubmitOtp = (otp) => {
    // TODO: Validate OTP
    setAuthPage('main');
  };

  const handleReportClick = () => setFormVisible(true);
  const handleCloseForm = () => setFormVisible(false);

  // Render flow

  if (authPage === 'splash') {
    return (
      <div className={`splash-container ${fadeSplash ? 'fade-in' : 'fade-out'}`}>
        <SplashScreen />
      </div>
    );
  }

  if (authPage === 'login') {
    return (
      <Login
        onLogIn={handleLogin}
        onShowSignUp={handleShowSignup}
      />
    );
  }

  if (authPage === 'signup') {
    return (
      <Signup
        onSignUp={handleSignup}
        onGoToLogin={() => setAuthPage('login')}
      />
    );
  }

  if (authPage === 'otp') {
    return (
      <SignupOtp
        emailOrPhone={signupEmailOrPhone}
        onSubmitOtp={handleSubmitOtp}
      />
    );
  }

  // Main app UI
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundShape})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
        minHeight: '100vh',
        padding: '40px 20px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className="App" style={{ maxWidth: 600, width: '100%', backgroundColor: 'rgba(255,255,255,0.85)', borderRadius: 15, padding: 20 }}>
        {/* Logo without white card */}
        <img
          src={logo}
          alt="WaterWise Logo"
          className="App-logo"
          style={{
            width: "320px",
            height: "auto",
            maxWidth: "100%",
            display: "block",
            objectFit: "contain",
            margin: "0 auto 32px auto",
            boxShadow: "none",
            borderRadius: 0,
            background: "transparent"
          }}
        />
        <h1>Welcome to Water-Wise</h1>
        <p>This is your first React web app for sustainable water management.</p>

        {!isFormVisible && <ReportProblemButton onClick={handleReportClick} />}

        {isFormVisible && <ReportProblemForm onClose={handleCloseForm} />}
      </div>
    </div>
  );
}

export default App;
