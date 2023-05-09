import React from 'react';
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const workoutLogs = [
  {
    _id: '90g0d5e96h1234567890abcd',
    userId: '60f8a4872d1234567890abcd',
    workoutId: '80f9c3d94g1234567890abcd',
    date: '2023-03-23T00:00:00.000Z',
    exerciseLogs: [
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

const WorkoutHistoryItem = ({log}) => {
  const date = new Date(log.date).toLocaleDateString();
  const exerciseList = log.exerciseLogs.map((exercise, index) => (
    <li key={index}>
      <strong>{exercise.name}</strong>: {exercise.sets} sets x {exercise.reps} reps
    </li>
  ));

  return (
    <div className="workout-history-item">
      <h3>{date}</h3>
      <ul>{exerciseList}</ul>
    </div>
  );
};


const WorkoutHistory = () => {
  return (
    <div className="workout-history">
      <h2>Workout History</h2>
      {workoutLogs.map((log) => (
        <WorkoutHistoryItem key={log._id} log={log} />
      ))}

      {/* <h2>Workout Statistics</h2>
      <div className="graphs">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={workoutStatsDummy.workoutTypes}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={workoutStatsDummy.workoutFrequency}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div> */}
    </div>
  );
};

export default WorkoutHistory;
