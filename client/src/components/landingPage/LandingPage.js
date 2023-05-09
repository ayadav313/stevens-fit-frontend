import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.scss';
import logo from '../../assets/images/logo.png';


const LandingPage = () => {
  return (
    <div className="landing-page d-flex flex-column">
      <header className="landing-page__header mb-5">
      <img src={logo} alt="Logo" className="mb-3" />
      <p>The Ultimate Fitness App for Stevens Students</p>
      </header>

      <section className="landing-page__features row gx-5 gy-5">
        <div className="landing-page__feature col-12 col-md-4">
          <div className="landing-page__card p-3">
            <i className="fa fa-cogs fa-3x mb-3"></i>
            <h2>Customized Workout Plans</h2>
            <p>Get workout plans tailored to the equipment available at the UCC gym.</p>
          </div>
        </div>

        <div className="landing-page__feature col-12 col-md-4">
          <div className="landing-page__card p-3">
            <i className="fa fa-line-chart fa-3x mb-3"></i>
            <h2>Track Your Progress</h2>
            <p>Keep track of your exercises, sets, reps, and weight to monitor your progress over time.</p>
          </div>
        </div>

        <div className="landing-page__feature col-12 col-md-4">
          <div className="landing-page__card p-3">
            <i className="fa fa-users fa-3x mb-3"></i>
            <h2>Connect with Gym Buddies</h2>
            <p>Stay motivated by connecting with your friends and coordinating workouts together.</p>
          </div>
        </div>
      </section>

      <footer className="landing-page__footer mt-auto">
        <Link to="/login" className="landing-page__login-btn">
          <i className="fa fa-sign-in mr-2"></i> Login / Sign Up
        </Link>
      </footer>
    </div>
  );
};

export default LandingPage;
