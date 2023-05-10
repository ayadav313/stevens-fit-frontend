import React from 'react';
import './ExerciseInput.scss';

const ExerciseInput = ({ exerciseOptions, exercise, setExercise }) => {
  return (
    <div className="exercise-input">
      <select
        value={exercise.selectedExercise}
        onChange={(e) => setExercise({ ...exercise, selectedExercise: e.target.value })}
        className="form-control exercise-input__select"
      >
        <option value="">Select an exercise</option>
        {exerciseOptions.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      <div>
        <label htmlFor={`sets-${exercise.id}`}>Sets:</label>
        <input
          type="number"
          id={`sets-${exercise.id}`}
          min="1"
          value={exercise.sets}
          onChange={(e) => setExercise({ ...exercise, sets: e.target.value })}
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor={`reps-${exercise.id}`}>Reps:</label>
        <input
          type="number"
          id={`reps-${exercise.id}`}
          min="1"
          value={exercise.reps}
          onChange={(e) => setExercise({ ...exercise, reps: e.target.value })}
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor={`notes-${exercise.id}`}>Notes:</label>
        <textarea
          id={`notes-${exercise.id}`}
          value={exercise.notes}
          onChange={(e) => setExercise({ ...exercise, notes: e.target.value })}
          className="form-control"
        />
      </div>
    </div>
  );
};

export default ExerciseInput;
