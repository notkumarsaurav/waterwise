import React, { useState } from 'react';
import './Login.css'; // Reuse the same CSS for consistent styling

function SignupOtp({ emailOrPhone, onSubmitOtp }) {
  const [otp, setOtp] = useState('');

  return (
    <div className="login-bg">
      <div className="login-card">
        <h2 className="login-title">Enter OTP</h2>
        {emailOrPhone && (
          <p>
            Enter the OTP sent to <strong>{emailOrPhone}</strong>
          </p>
        )}
        <input
          className="login-input"
          type="text"
          maxLength={6}
          placeholder="OTP"
          value={otp}
          onChange={e => setOtp(e.target.value)}
        />
        <button className="login-btn" onClick={() => onSubmitOtp && onSubmitOtp(otp)}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default SignupOtp;
