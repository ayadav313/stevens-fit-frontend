import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page d-flex flex-column">
      <header className="landing-page__header mb-5">
        <h1>Stevens Fit</h1>
        <p>The Ultimate Fitness App for Stevens Students</p>
      </header>

      <section className="landing-page__features row gx-5 gy-5">
        <div className="landing-page__feature col-12 col-md-4">
          <h2>Customized Workout Plans</h2>
          <p>Get workout plans tailored to the equipment available at the UCC gym.</p>
        </div>

        <div className="landing-page__feature col-12 col-md-4">
          <h2>Track Your Progress</h2>
          <p>Keep track of your exercises, sets, reps, and weight to monitor your progress over time.</p>
        </div>

        <div className="landing-page__feature col-12 col-md-4">
          <h2>Connect with Gym Buddies</h2>
          <p>Stay motivated by connecting with your friends and coordinating workouts together.</p>
        </div>
      </section>

      <footer className="landing-page__footer mt-auto">
        <Link to="/login" className="landing-page__login-btn">
          Login / Sign Up
        </Link>
      </footer>
    </div>
  );
};

export default LandingPage;
