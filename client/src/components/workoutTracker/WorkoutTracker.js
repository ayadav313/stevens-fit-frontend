// TODO: create a component that allows u to follow through a workout
// TODO: Component gets sent a Workout object id
// TODO: get the workout from that
// TODO: Create a ui to allow users to go through that workout
// TODO: on button send call POST and save to workoutLog Document
import React, { useState, useEffect } from 'react';
const WorkoutTracker = () => {
    const [error, setError] = useState(null);
    return (
      <div className="workout-catalog">
        <h3>Workout Tracker</h3>
        {error ? (
          <p className="error-message">Failed to load workout tracker: {error}</p>
        ) : (
          <div className="row row-cols-1 row-cols-md-5 g-4">
            
          </div>
        )}
      </div>
    );
  };
  
  export default WorkoutTracker;