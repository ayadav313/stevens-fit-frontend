import React from 'react';
import './WorkoutHistory.scss';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import Exercise from '../common/Exercise';
import Workout from '../common/Workout';
const workoutLogs = [
  {
    _id: '90g0d5e96h1234567890abcd',
    userId: '60f8a4872d1234567890abcd',
    workoutId: '80f9c3d94g1234567890abcd',
    date: '2023-03-23T00:00:00.000Z',
    exerciseLogs: [
      {
        exerciseId: '70e9b2c83f1234567890abce',
        name: 'Squats',
        sets: 4,
        reps: 12,
        notes: 'Struggled on the last set, need to work on form.',
      },
      {
        exerciseId: '70e9b2c83f1234567890abcd',
        name: 'Bench Press',
        sets: 3,
        reps: 10,
        notes: 'Felt strong today, increased weight by 5 lbs.',
      },
      {
        exerciseId: '70e9b2c83f1234567890abce',
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
        exerciseId: '70e9b2c83f1234567890abce',
        name: 'Squats',
        sets: 4,
        reps: 12,
        notes: 'Struggled on the last set, need to work on form.',
      },
      {
        exerciseId: '70e9b2c83f1234567890abce',
        name: 'Squats',
        sets: 4,
        reps: 12,
        notes: 'Struggled on the last set, need to work on form.',
      },
      {
        exerciseId: '70e9b2c83f1234567890abcd',
        name: 'Bench Press',
        sets: 3,
        reps: 10,
        notes: 'Felt strong today, increased weight by 5 lbs.',
      },
      {
        exerciseId: '70e9b2c83f1234567890abce',
        name: 'Squats',
        sets: 4,
        reps: 12,
        notes: 'Struggled on the last set, need to work on form.',
      },
    ],
  },
];
const workoutStatsDummy = {
  workoutTypes: [
    { name: 'Strength', value: 6 },
    { name: 'Cardio', value: 3 },
    { name: 'Flexibility', value: 1 },
  ],
  workoutFrequency: [
    { name: 'Week 1', count: 3 },
    { name: 'Week 2', count: 2 },
    { name: 'Week 3', count: 4 },
    { name: 'Week 4', count: 1 },
  ],
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
      <Exercise
        exercise={{
          ...exercise,
          target: exercise.target,
          bodyPart: exercise.bodyPart,
          equipment: exercise.equipment,
          gifUrl: exercise.gifUrl,
        }}
      />
    </ListItem>
  ));

  return (
    <Card className="workout-history-item" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {date}
        </Typography>
        <div className="content-container">
          <div className="workout-container">
            <Workout workout={log} />
          </div>
          <div className="exercise-list-container">
            <List>{exerciseList}</List>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const WorkoutHistory = () => {
  return (
    <div className="workout-history container mt-5">
      {workoutLogs.map((log) => (
        <WorkoutHistoryItem key={log._id} log={log} />
      ))}
    </div>
  );
};

export default WorkoutHistory;

