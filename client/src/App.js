import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './components/landingPage/LandingPage.js';
import LoginSignUpPage from './components/loginSignUpPage/LoginSignUpPage';
// import Dashboard from './components/dashboard/Dashboard';
// import ExerciseCatalog from './components/exerciseCatalog/ExerciseCatalog';
// import WorkoutCatalog from './components/workoutCatalog/WorkoutCatalog';
// import WorkoutTracker from './components/workoutTracker/WorkoutTracker';
// import SocialPlatform from './components/socialPlatform/SocialPlatform';
// import Calendar from './components/calendar/Calendar';

import './index.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginSignUpPage/>} />
          {/*<Route path="/dashboard" component={Dashboard} />
          <Route path="/exercise-catalog" component={ExerciseCatalog} />
          <Route path="/workout-catalog" component={WorkoutCatalog} />
          <Route path="/workout-tracker" component={WorkoutTracker} />
          <Route path="/social-platform" component={SocialPlatform} />
          <Route path="/calendar" component={Calendar} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
