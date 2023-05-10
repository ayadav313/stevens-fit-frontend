import React, { useState, useEffect } from 'react';
import ExerciseInput from './ExerciseInput';
import './WorkoutCreate.scss';

const WorkoutCreate = () => {
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);
  const [exerciseInputs, setExerciseInputs] = useState([{ id: 0, selectedExercise: '', sets: '', reps: '' }]);

  const fetchExercises = async () => {
    try {
      const response = await fetch('http://localhost:3000/exercises');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setExercises(data);
    } catch (error) {
      console.error('Failed to fetch exercises:', error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  const addExerciseInput = () => {
    setExerciseInputs([...exerciseInputs, { id: exerciseInputs.length, selectedExercise: '', sets: '', reps: '' }]);
  };

  const setExerciseInput = (id, exercise) => {
    setExerciseInputs(exerciseInputs.map((input) => (input.id === id ? exercise : input)));
  };

  const createWorkout = async () => {
    console.log(exerciseInputs[0]);
    const exercises = [];
    for(let i = 0; i < exerciseInputs.length; i++){
      const currentExercise = exerciseInputs[i];
      const currentObj = {};
      currentObj.exerciseId = currentExercise.selectedExercise;
      currentObj.sets = currentExercise.sets;
      currentObj.reps = currentExercise.reps;
      currentObj.additionalDetails = currentExercise.notes;
      exercises.push(currentObj);
    }
    const workoutObj = {};
    workoutObj.name = "Temp name";
    workoutObj.creator = "NEED TO FIGURE OUT HOW TO GET USER ID HERE";
    workoutObj.exercises = exercises;
    const response = await fetch('http://localhost:3000/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ workoutObj })
    });
    console.log(response);
    //TODO: Add redirect after successful insert
  }

  return (
    <div className="workout-create container-fluid">
      <h3 className="text-center mb-3">Create Workout</h3>
      {error && <p className="error-message">Failed to load exercises: {error}</p>}
      <div>
        {exerciseInputs.map((exercise) => (
          <ExerciseInput
            key={exercise.id}
            exerciseOptions={exercises}
            exercise={exercise}
            setExercise={(updatedExercise) => setExerciseInput(exercise.id, updatedExercise)}
          />
        ))}
        <button className="btn btn-primary" onClick={addExerciseInput}>
          Add Exercise
        </button>
        {/* Add the submit button for the entire form */}
        <button className="btn btn-primary" onClick={createWorkout}>Submit Workout</button>
      </div>
    </div>
  );
};

export default WorkoutCreate;
