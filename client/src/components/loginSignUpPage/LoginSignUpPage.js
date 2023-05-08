import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginSignUpPage.scss';

const LoginSignUpPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate(); // Create a navigate variable

  const toggleLoginSignUp = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup-page d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="card w-75">
        <div className="card-body">
          <h2 className="card-title text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
          <form>
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" />
              </div>
            )}
            <button
              type="submit"
              className="btn btn-primary w-100 mt-3"
              onClick={() => navigate('/dashboard')} // Redirect to dashboard if login is successful
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <div className="text-center mt-3">
            <span>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button className="btn btn-link p-0 ml-1" onClick={toggleLoginSignUp}>
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </span>
          </div>
        </div>
      </div>
      <Link to="/" className="mt-3">Return to Home Page</Link>
    </div>
  );
};

export default LoginSignUpPage;
