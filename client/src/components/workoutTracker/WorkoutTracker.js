import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const WorkoutTracker = () => {
  const location = useLocation();
  const workoutData = location.state ? location.state.workoutData : null;
  const [workout, setWorkout] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (workoutData) {
      setWorkout(workoutData);
    }
  }, [workoutData]);

  const [exerciseLogs, setExerciseLogs] = useState([]);

  const handleSetReps = (exerciseId, sets, reps) => {
    setExerciseLogs((prevState) => [
      ...prevState.filter((el) => el.exerciseId !== exerciseId),
      { exerciseId, sets, reps },
    ]);
  };

  const handleSubmit = () => {
    // TODO: handleSubmit()
    console.log('Workout saved successfully!', { workoutId: workoutData._id, exerciseLogs });
    alert('Workout saved successfully!');
    navigate('/dashboard');
  };

  if (!workout) {
    return <div>Loading...</div>;
  }
  console.log(workout);

  return (
    <div className="workout-tracker container">
      <h3 className="my-4">{workout.name}</h3>
      {workout.exerciseLogs.map((exercise, idx) => (
        <div key={idx} className="exercise-log card mb-3 p-3">
          <h4 className="card-title">{exercise.name}</h4>
          <p className="card-text">Sets: {exercise.sets}</p>
          <p className="card-text">Reps: {exercise.reps}</p>
          {exercise.weight && <p className="card-text">Weight: {exercise.weight} lbs</p>}
          {exercise.restTime && <p className="card-text">Rest time: {exercise.restTime} sec</p>}
          {exercise.notes && <p className="card-text">Notes: {exercise.notes}</p>}
          <div className="input-group mb-3">
            <span className="input-group-text">Sets performed:</span>
            <input
              type="number"
              className="form-control"
              onChange={(e) => handleSetReps(exercise.exerciseId, Number(e.target.value), exercise.reps)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Reps performed:</span>
            <input
              type="number"
              className="form-control"
              onChange={(e) => handleSetReps(exercise.exerciseId, exercise.sets, Number(e.target.value))}
            />
          </div>
        </div>
      ))}
      <button className="btn btn-primary" onClick={handleSubmit}>Submit Workout</button>
    </div>
  );
};

export default WorkoutTracker;
