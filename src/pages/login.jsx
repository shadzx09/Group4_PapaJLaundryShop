import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import '../styles/loginstyle.css';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate(); 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/Dashboard');
  };

  return (
    <div className="login-container">
      {/* Background Bubble Effect */}
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      {/* 3D Glass Card Form */}
      <div className="login-glass-card">
        <h1 className="shop-title-3d">Papa J's Laundry Shop</h1>
        <div className="login-form-wrapper">
          <h2 className="login-title">Welcome Back!</h2>
          <form onSubmit={handleLogin} className="login-form">

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email..."
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password..."
                value={formData.password}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <button type="submit" className="login-button">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
