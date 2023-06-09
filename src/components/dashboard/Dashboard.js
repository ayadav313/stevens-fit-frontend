//import React from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHistory,
  faSignOutAlt,
  faCalendarPlus,
  faRunning,
  faDumbbell,
} from '@fortawesome/free-solid-svg-icons';


// INFO
// const user = JSON.parse(window.localStorage.getItem('user')); 
// the line above will put user into the user var if it exists. 

const Dashboard = () => {
  const navigate = useNavigate();

  const user = JSON.parse(window.localStorage.getItem('user'));
  const username = user.username; 


  const handleSignOut = () => {
    window.localStorage.removeItem('user');
    navigate('/');
  };

  const handleExerciseCatalog = () => {
    navigate('/exercise-catalog');
  };

  const handleWorkoutCatalog = () => {
    navigate('/workout-catalog');
  };

  const handleWorkoutHistory = () => {
    navigate('/workout-history');
  };

  const handleWorkoutCreate = () => {
    navigate('/workout-create');
  };

  return (
    <div className="dashboard d-flex flex-column align-items-center justify-content-top vh-100">
        <h1 className='m-5'>Welcome {username}!</h1>
        <div className="d-flex flex-row">
          <div className="d-flex flex-column align-items-center mx-4">
          <button onClick={handleWorkoutCreate} className="btn btn-success btn-icon btn-lg my-4">
            <FontAwesomeIcon icon={faDumbbell} />
          </button>
          <span>Create Workout</span>

          </div>
          <div className="d-flex flex-column align-items-center mx-4">
            <button onClick={handleWorkoutCatalog} className="btn btn-primary btn-icon btn-lg my-4">
              <FontAwesomeIcon icon={faRunning} />
            </button>
            <span>Start Workout</span>
          </div>
          <div className="d-flex flex-column align-items-center mx-4">
            <a
              href="https://stevensrec.com/sports/2021/12/21/dse-capacity.aspx"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-icon btn-lg my-4"
            >
              <FontAwesomeIcon icon={faCalendarPlus} />
            </a>
            <span>Book appointment at UCC Gym!</span>
          </div>
          <div className="d-flex flex-column align-items-center mx-4">
            <button onClick={handleWorkoutHistory} className="btn btn-secondary btn-icon btn-lg my-4">
              <FontAwesomeIcon icon={faHistory} />
            </button>
            <span>Workout History</span>
          </div>
          <div className="d-flex flex-column align-items-center mx-4">
            <button onClick={handleSignOut} className="btn btn-danger btn-icon btn-lg my-4">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
            <span>Sign Out</span>
          </div>
        </div>


    </div>
  );
  
  
  }  

export default Dashboard;
