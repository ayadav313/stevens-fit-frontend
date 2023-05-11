import React, { useState, useEffect } from 'react';
import './WorkoutHistory.scss';

import WorkoutHistoryItem from './WorkoutHistoryItem';

const WorkoutHistory = () => {
  const [workoutLogs, setWorkoutLogs] = useState([]);

  //TODO TEST WORKOUTLOGS/USER-ID
  useEffect(() => {
    const fetchWorkoutLogs = async () => {
      try {
        const user = JSON.parse(window.localStorage.getItem('user'));
        console.log(user._id);
        const response = await fetch(`http://localhost:3000/workoutLogs/${user._id}`);

        if(!response.ok)
        {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setWorkoutLogs(data);
      } catch (error) {
        console.error('Failed to fetch workout logs:', error);
      }
    };

    fetchWorkoutLogs();
  }, []);

  return (
    <div className="workout-history container mt-5">
      {workoutLogs.map((log) => (
        <WorkoutHistoryItem key={log._id} log={log} />
      ))}
    </div>
  );
};

export default WorkoutHistory;
