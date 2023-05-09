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
    <div className="dashboard d-flex flex-column align-items-center vh-100">
      <div className="card w-75">
        <div className="card-body">
          
          <h2 className="card-title text-center">Welcome!</h2>

          <div className="d-flex justify-content-end">
            <button onClick={handleExerciseCatalog} className="btn btn-link">
              Exercise Catalog <FontAwesomeIcon icon={faDumbbell} size="2x" />
            </button>
            {/* TODO: FA button to workout catalog, SAME AS ABOVE */}   
            <p>Workout Catalog</p>

            {/* TODO: START workout button which goes to workout tracker */}
            <p>Start workout button</p>

            {/* TODO: link to UCC signup for gym */}
            <p>Link to the UCC gym</p>
            
            <button onClick={handleSignOut} className="btn btn-primary mt-3">
              Sign Out
            </button>

          </div>
          

          {/* TODO rest of the page is the workout history page itself */}

          {/* 
              TODO:<SocialPlatform />
              TODO:<Calendar /> 
          */}
        </div>
      </div>
      <p>Workout history page here</p>

    </div>
  );
};

export default Dashboard;
