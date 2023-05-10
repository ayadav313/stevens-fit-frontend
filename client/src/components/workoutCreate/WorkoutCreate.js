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
        <button className="btn btn-primary">Submit Workout</button>
      </div>
    </div>
  );
};

export default WorkoutCreate;
