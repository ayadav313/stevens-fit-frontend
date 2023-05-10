import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Exercise from '../common/Exercise';

const WorkoutTracker = () => {
  const location = useLocation();
  const workoutData = location.state ? location.state.workoutData : null;
  const [workout, setWorkout] = useState(null);
  const navigate = useNavigate();

  const [exercises, setExercises] = useState({});

  useEffect(() => {
    if (workoutData) {
      setWorkout(workoutData);
    }
  }, [workoutData]);

  useEffect(() => {
    const fetchExercises = async () => {
      const exerciseData = {};
      for (const exerciseLog of workout.exerciseLogs) {
        const response = await fetch(`http://localhost:3000/exercises/${exerciseLog.exerciseId}`);
        const data = await response.json();
        exerciseData[exerciseLog.exerciseId] = data;
      }
      setExercises(exerciseData);
    };
  
    if (workout) {
      fetchExercises();
    }
  }, [workout]);
  

  const [exerciseLogs, setExerciseLogs] = useState([]);

  const handleSetReps = (exerciseId, sets, reps) => {
    setExerciseLogs((prevState) => [
      ...prevState.filter((el) => el.exerciseId !== exerciseId),
      { exerciseId, sets, reps },
    ]);
  };



  const handleSubmit = () => {
    console.log('Workout saved successfully!', { workoutId: workoutData._id, exerciseLogs });
    alert('Workout saved successfully!');
    navigate('/dashboard');
  };

  if (!workout) {
    return <div>Loading...</div>;
  }

  console.log(workout.exerciseLogs);
  return (
    <div className="workout-tracker container">
      <h3 className="my-4">{workout.name}</h3>
      {workout.exerciseLogs.map((exercise, idx) => {
  const exerciseData = exercises[exercise.exerciseId];
  return (
    <div key={idx} className="exercise-log card mb-3 p-3">
      {exerciseData ? (
        <>
        {/* TODO INSTEAD OF THESE 3 LINES UNDERNEATH JUST USE MY EXERCISE COMPONENT. YOU HAVE THE THINGS NEEDED TO BUILD EXERCISE. */}
          {/* <h4 className="card-title">{exerciseData.name}</h4>
          <p className="card-text">Sets: {exercise.sets}</p>
          <p className="card-text">Reps: {exercise.reps}</p>
          {exercise.weight && <p className="card-text">Weight: {exercise.weight} lbs</p>}
          {exercise.restTime && <p className="card-text">Rest time: {exercise.restTime} sec</p>}
          {exercise.notes && <p className="card-text">Notes: {exercise.notes}</p>} */}
          <div className="row">
          <div className="col-md-6">
            <Exercise exercise={exerciseData} />
          </div>
          <div className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text">Sets performed:</span>
            <input
              type="number"
              className="form-control"
              onChange={(e) =>
                handleSetReps(exercise.exerciseId, Number(e.target.value), exercise.reps)
              }
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Reps performed:</span>
            <input
              type="number"
              className="form-control"
              onChange={(e) =>
                handleSetReps(exercise.exerciseId, exercise.sets, Number(e.target.value))
              }
            />
          </div>
          </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
})}
      <button className="btn btn-primary" onClick={handleSubmit}>Submit Workout</button>
    </div>
  );
};

export default WorkoutTracker;
