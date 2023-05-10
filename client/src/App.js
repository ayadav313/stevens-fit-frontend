import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './components/landingPage/LandingPage';
import LoginSignUpPage from './components/loginSignUpPage/LoginSignUpPage';
import Dashboard from './components/dashboard/Dashboard';
import ExerciseCatalog from './components/exerciseCatalog/ExerciseCatalog';

import WorkoutCatalog from './components/workoutCatalog/WorkoutCatalog';
import WorkoutTracker from './components/workoutTracker/WorkoutTracker';
import WorkoutHistory from './components/workoutHistory/WorkoutHistory';

import WorkoutCreate from './components/workoutCreate/WorkoutCreate';
// import SocialPlatform from './components/socialPlatform/SocialPlatform';
// import Calendar from './components/calendar/Calendar';

import './index.scss';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginSignUpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exercise-catalog" element={<ExerciseCatalog />} />
          <Route path="/workout-catalog" element={<WorkoutCatalog />} />
          <Route path="/workout-tracker" element={<WorkoutTracker />} />
          <Route path="/workout-history" element={<WorkoutHistory />} />
          <Route path="/workout-create" element={<WorkoutCreate />} />
          {/* />
          /> */}
          {/* <Route path="/social-platform" component={SocialPlatform} />
          <Route path="/calendar" component={Calendar} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
