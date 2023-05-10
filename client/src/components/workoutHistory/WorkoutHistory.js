import React from 'react';
import './WorkoutHistory.scss';

import WorkoutHistoryItem from './WorkoutHistoryItem';

const WorkoutHistory = () => {
  const workoutLogs = [
    {
      _id: '645bb7c20f28004f5d9f8870',
      userId: '60f8a4872d1234567890abcd',
      workoutId: '645bb7c20f28004f5d9f8870',
      date: '2023-03-23T00:00:00.000Z',
      exerciseLogs: [
        {
          exerciseId: '643d6a3534a9b6db89fb5d31',
          name: 'Squats',
          sets: 4,
          reps: 12,
          notes: 'Struggled on the last set, need to work on form.',
        },
        {
          exerciseId: '643d6a3534a9b6db89fb5d31',
          name: 'Bench Press',
          sets: 3,
          reps: 10,
          notes: 'Felt strong today, increased weight by 5 lbs.',
        },
        {
          exerciseId: '643d6a3534a9b6db89fb5d31',
          name: 'Squats',
          sets: 4,
          reps: 12,
          notes: 'Struggled on the last set, need to work on form.',
        },
      ],
    },
    {
      _id: '90g0d5e96h1234567890abcd',
      userId: '60f8a4872d1234567890abcd',
      workoutId: '80f9c3d94g1234567890abcd',
      date: '2023-03-23T00:00:00.000Z',
      exerciseLogs: [
        {
          exerciseId: '643d6a3534a9b6db89fb5d31',
          name: 'Squats',
          sets: 4,
          reps: 12,
          notes: 'Struggled on the last set, need to work on form.',
        },
        {
          exerciseId: '643d6a3534a9b6db89fb5d31',
          name: 'Squats',
          sets: 4,
          reps: 12,
          notes: 'Struggled on the last set, need to work on form.',
        },
        {
          exerciseId: '643d6a3534a9b6db89fb5d31',
          name: 'Bench Press',
          sets: 3,
          reps: 10,
          notes: 'Felt strong today, increased weight by 5 lbs.',
        },
        {
          exerciseId: '643d6a3534a9b6db89fb5d31',
          name: 'Squats',
          sets: 4,
          reps: 12,
          notes: 'Struggled on the last set, need to work on form.',
        },
      ],
    },
  ];
  
  return (
    <div className="workout-history container mt-5">
      {workoutLogs.map((log) => (
        <WorkoutHistoryItem key={log._id} log={log} />
      ))}
    </div>
  );
};

export default WorkoutHistory;

