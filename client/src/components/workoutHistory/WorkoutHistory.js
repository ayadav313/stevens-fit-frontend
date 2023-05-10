import React, { useState, useEffect } from 'react';
import './WorkoutHistory.scss';

import WorkoutHistoryItem from './WorkoutHistoryItem';

const WorkoutHistory = () => {
  const [workoutLogs, setWorkoutLogs] = useState([]);

  useEffect(() => {
    const fetchWorkoutLogs = async () => {
      try {
        const response = await fetch('http://localhost:3000/workoutLogs/');
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
