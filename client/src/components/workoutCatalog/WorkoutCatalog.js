import React, { useState, useEffect } from 'react';
import './WorkoutCatalog.scss';

// TODO: make it look good

// TODO: get exercises via ID from array

// TODO: use exercise component from before to display them

// TODO: add start button to start a workout
// const fetchExercise = async (exerciseId) => {
//   try {
//     const response = await fetch(`http://localhost:3000/exercises/${exerciseId}`);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const exerciseData = await response.json();
//     return exerciseData;
//   } catch (error) {
//     console.error(`Failed to fetch exercise ${exerciseId}:`, error);
//     throw error;
//   }
// };
const fetchExercise = async (exerciseId) => {
  const dummyExercises = {
    '612db8f48a7c18bf22004b0a': {
      _id: '612db8f48a7c18bf22004b0a',
      name: 'Push-ups',
    },
    '612db8f48a7c18bf22004b0b': {
      _id: '612db8f48a7c18bf22004b0b',
      name: 'Squats',
    },
  };

  return dummyExercises[exerciseId];
};


const Workout = ({ workout }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const fetchedExercises = await Promise.all(
        workout.exerciseLogs.map(async (log) => await fetchExercise(log.exerciseId))
      );
      setExercises(fetchedExercises);
    };
  
    fetchExercises();
  }, [workout.exerciseLogs]);
  
  return (
    <div className="workout-item card">
      <h4 className="card-header">{workout.name}</h4>
      <div className="card-body">
        <p>Creator: {workout.creator}</p>
        <h5>Exercises:</h5>
        <ul className="list-unstyled">
          {exercises.map((exercise, index) => (
            <li key={index} className="mb-3">
              <h6>{exercise.name}</h6>
              <p>
                Sets: <strong>{workout.exerciseLogs[index].sets}</strong>, Reps:{" "}
                <strong>{workout.exerciseLogs[index].reps}</strong>
              </p>
              {workout.exerciseLogs[index].additionalDetails && (
                <p className="text-muted">
                  <em>{workout.exerciseLogs[index].additionalDetails}</em>
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
};

const WorkoutCatalog = () => {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  const fetchWorkouts = async () => {
    // Comment out the API request
    /*
    try {
      const response = await fetch('http://localhost:3000/workouts');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setWorkouts(data);
    } catch (error) {
      console.error('Failed to fetch workouts:', error);
      setError(error.message);
    }
    */

    // Use dummy data
    const dummyData = [
      {
        _id: "1",
        name: "Workout 1",
        creator: "John",
        exerciseLogs: [
          {
            exerciseId: "612db8f48a7c18bf22004b0a",
            sets: 3,
            reps: 8,
            additionalDetails: "Rest two minutes between sets",
          },
        ],
      },
      {
        _id: "2",
        name: "Workout 2",
        creator: "Jane",
        exerciseLogs: [
          {
            exerciseId: "612db8f48a7c18bf22004b0b",
            sets: 4,
            reps: 12,
            additionalDetails: "Rest one minute between sets",
          },
        ],
      },
    ];

    setWorkouts(dummyData);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div className="workout-catalog">
      <h3>Workout Catalog</h3>
      {error ? (
        <p className="error-message">Failed to load workouts: {error}</p>
      ) : (
        <div className="workouts-list row row-cols-1 row-cols-md-5 g-4">
          {workouts.map((workout) => (
            <div key={workout._id} className="col">
              <Workout workout={workout} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutCatalog;
