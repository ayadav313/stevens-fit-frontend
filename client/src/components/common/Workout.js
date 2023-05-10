import './Workout.scss';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const fetchExercise = async (exerciseId) => {
    // const dummyExercises = {
    //   '612db8f48a7c18bf22004b0a': {
    //     _id: '612db8f48a7c18bf22004b0a',
    //     name: 'Push-ups',
    //   },
    //   '612db8f48a7c18bf22004b0b': {
    //     _id: '612db8f48a7c18bf22004b0b',
    //     name: 'Squats',
    //   },
    // };
  
    // return dummyExercises[exerciseId];
    const response = await fetch("http://localhost:3000/exercises/" + exerciseId)
    const out = response.json();
    return out;

  };
  

const Workout = ({ workout }) => {
    const [exercises, setExercises] = useState([]);
  
      // Inside the Workout component
      const navigate = useNavigate();
  
      const startWorkout = () => {
        navigate('/workout-tracker', { state: { workoutData: workout } });
      };
  
  
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
                <h6>{exercise?.name || 'Exercise name should be here!'}</h6>
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
          <button className="btn btn-primary" onClick={startWorkout}>
    Start
  </button>
        </div>
      </div>
    );
    
  };

export default Workout;
