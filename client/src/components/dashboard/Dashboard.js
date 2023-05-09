import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDumbbell,
  faSignOutAlt,
  faCalendarPlus,
  faRunning,
} from '@fortawesome/free-solid-svg-icons';
// Import your components here, for example:
import ExerciseCatalog from '../exerciseCatalog/ExerciseCatalog';
import WorkoutTracker from '../workoutTracker/WorkoutTracker';
// import WorkoutCatalog from './WorkoutCatalog';
// import SocialPlatform from './SocialPlatform';
// import Calendar from './Calendar';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Perform any sign-out actions here, such as clearing authentication tokens
    navigate('/');
  };

  const handleExerciseCatalog = () => {
    navigate('/exercise-catalog');
  };

  const handleWorkoutCatalog = () => {
    navigate('/workout-catalog');
  };

  const handleWorkoutTracker = () => {
    navigate('/workout-tracker');
  };

  return (
    <div className="dashboard d-flex flex-column align-items-center vh-100">
      <div className="card w-75">
        <div className="card-body">
          <h2 className="card-title text-center">Welcome!</h2>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <button onClick={handleWorkoutTracker} className="btn btn-primary mb-2 mb-md-0 mr-md-2">
              <FontAwesomeIcon icon={faRunning} className="mr-2" />
              Start Workout
            </button>
            <a
              href="https://stevensrec.com/sports/2021/12/21/dse-capacity.aspx"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary mb-2 mb-md-0 mr-md-2"
            >
              <FontAwesomeIcon icon={faCalendarPlus} className="mr-2" />
              Book appointment at UCC Gym!
            </a>
            <button onClick={handleSignOut} className="btn btn-danger">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Sign Out
            </button>
          </div>
          {/* TODO Workout history component placed here */}
          {/* TODO: <SocialPlatform /> /}
          {/* TODO: <Calendar /> */}
        </div>
      </div>
      <p>Workout history page here</p>
    </div>
  );
};

export default Dashboard;