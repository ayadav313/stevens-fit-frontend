import React, { useState, useEffect } from 'react';
import ExerciseInput from './ExerciseInput';
import './WorkoutCreate.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const WorkoutCreate = () => {
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);
  const [exerciseInputs, setExerciseInputs] = useState([{ id: 0, selectedExercise: '', sets: '', reps: '' }]);
  const [formErrors, setFormErrors] = useState([]);
  const [workoutName, setWorkoutName] = useState('');

  const navigate = useNavigate();

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
  const validateForm = () => {
    const errors = [];

    if (workoutName.trim() === '') {
      errors.push('Workout name is required.');
    }

    exerciseInputs.forEach((exercise) => {
      if (exercise.selectedExercise === '') {
        errors.push('Exercise selection is required.');
      }

      if (exercise.sets === '') {
        errors.push('Sets are required.');
      }

      if (exercise.reps === '') {
        errors.push('Reps are required.');
      }
    });

    setFormErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form is valid, submit the workout');
      // submit the workout
      navigate('/dashboard');
    }
  };
  return (
    <div className="workout-create container">
      <h3 className="text-center mb-3">Create Workout</h3>
      <div className="row justify-content-center mb-3">
        <div className="col-12 col-md-6 col-lg-4">
          <input
            type="text"
            placeholder="Workout name"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
            className="form-control"
          />
        </div>
      </div>
      {error && <p className="error-message">Failed to load exercises: {error}</p>}
      <div className="row justify-content-center">
        {exerciseInputs.map((exercise) => (
          <div className="col-12 col-md-6 col-lg-4 mb-3" key={exercise.id}>
            <ExerciseInput
              exerciseOptions={exercises}
              exercise={exercise}
              setExercise={(updatedExercise) => setExerciseInput(exercise.id, updatedExercise)}
            />
          </div>
        ))}
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-12 col-md-6 col-lg-4 text-center">
          <button className="btn btn-primary" onClick={addExerciseInput}>
            <FontAwesomeIcon icon={faPlus} /> Add Exercise
          </button>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-12 col-md-6 col-lg-4 text-center">
          <button onClick={handleSubmit} className="btn btn-success">
            <FontAwesomeIcon icon={faCheck} /> Submit Workout
          </button>
        </div>
      </div>
      {formErrors.length > 0 && (
        <ul className="error-message">
          {formErrors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </div>
  );
  
  
  
};

export default WorkoutCreate;
