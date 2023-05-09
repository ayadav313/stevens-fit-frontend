import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

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

  return (
    <div className="dashboard d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="card w-75">
        <div className="card-body">
          <div className="d-flex justify-content-end">
            <button onClick={handleExerciseCatalog} className="btn btn-link">
              Exercise Catalog <FontAwesomeIcon icon={faDumbbell} size="2x" />
            </button>
          </div>
          <h2 className="card-title text-center">Dashboard</h2>
          <p>Welcome to your dashboard!</p>
          {/* Add your dashboard components here, for example: */}
          
          {/* {<WorkoutTracker />} */}

          {/* {<ExerciseCatalog /> */}
          {/* 
          <WorkoutCatalog />
          <SocialPlatform />
          <Calendar /> */}
        </div>
      </div>
      <button onClick={handleSignOut} className="btn btn-primary mt-3">
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
