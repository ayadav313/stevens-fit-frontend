import React, { useState, useEffect } from 'react';
import Exercise from '../common/Exercise';
import Workout from '../common/Workout';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

import './WorkoutHistory.scss';

// const WorkoutHistoryItem = ({ log }) => {
//   const [exerciseData, setExerciseData] = useState([]);
//   const [workoutData, setWorkoutData] = useState(null);

//   useEffect(() => {
//     const fetchExerciseData = async () => {
//       const fetchedData = [];
//       for (const exerciseLog of log.exerciseLogs) {
//         const response = await fetch(`/exercises/${exerciseLog.exerciseId}`);
//         const data = await response.json();
//         fetchedData.push({ ...exerciseLog, ...data });
//       }
//       setExerciseData(fetchedData);
//     };

//     const fetchWorkoutData = async () => {
//       const response = await fetch(`/workouts/${log.workoutId}`);
//       const data = await response.json();
//       setWorkoutData(data);
//     };

//     fetchExerciseData();
//     fetchWorkoutData();
//   }, [log]);

//   const date = new Date(log.date).toLocaleString('en-US', {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//   });

//   const exerciseList = exerciseData.map((exercise, index) => (
//     <ListItem key={index} disablePadding>
//       <Exercise exercise={exercise} />
//     </ListItem>
//   ));

//   return (
//     <Card className="workout-history-item" sx={{ marginBottom: 2 }}>
//       <CardContent>
//         <Typography variant="h6" component="div" gutterBottom>
//           {date}
//         </Typography>
//         <div className="content-container">
//           <div className="workout-container">
//             {workoutData && <Workout workout={workoutData} />}
//           </div>
//           <div className="exercise-list-container">
//             <List>{exerciseList}</List>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
  
//   }

// SAMPLE LOG:
/*
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
];*/
const WorkoutLog = ({ exerciseLog }) => {
  return (
    <div className="workout-log">
      <p>
        <strong>Sets:</strong> {exerciseLog.sets}
      </p>
      <p>
        <strong>Reps:</strong> {exerciseLog.reps}
      </p>
      <p>
        <strong>Notes:</strong> {exerciseLog.notes}
      </p>
    </div>
  );
};

  const WorkoutHistoryItem = ({ log }) => {
  const date = new Date(log.date).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  const exerciseList = log.exerciseLogs.map((exercise, index) => (
    <ListItem key={index} disablePadding>
      <div className="exercise-log-item">
      <Exercise
        exercise={{
          ...exercise,
          target: exercise.target,
          bodyPart: exercise.bodyPart,
          equipment: exercise.equipment,
          gifUrl: exercise.gifUrl,
        }}
      />
      <WorkoutLog exerciseLog={exercise} />
      </div>
    </ListItem>
  ));

  return (
    <Card className="workout-history-item mb-3">
      <CardContent>
        <Typography variant="h3" component="div" gutterBottom>
          {date}
        </Typography>
        <div className="content-container d-flex">
          <div className="workout-container mr-3" style={{ flexBasis: '25%', flexGrow: 0 }}>
            <Workout workout={log} />
          </div>
          <div className="exercise-list-container" style={{ flexBasis: '75%', flexGrow: 0 }}>
            <List>{exerciseList}</List>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

  export default WorkoutHistoryItem;