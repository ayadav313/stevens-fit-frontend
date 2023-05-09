import React, { useState, useEffect } from 'react';
import './ExerciseCatalog.scss';

const Exercise = ({ exercise }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="exercise-item card" onClick={toggleDetails}>
      <h4 className="card-header">{exercise.name}</h4>
      {showDetails && (
        <div className="card-body">
          <p>Target: {exercise.target}</p>
          <p>Body Part: {exercise.bodyPart}</p>
          <p>Equipment: {exercise.equipment}</p>
          <img src={exercise.gifUrl} alt={exercise.name} className="img-fluid" />
          {/* Add any additional exercise information here */}
        </div>
      )}
    </div>
  );
};

const ExerciseCatalog = () => {
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <div className="exercise-catalog">
      <h3>Exercise Catalog</h3>
      {error ? (
        <p className="error-message">Failed to load exercises: {error}</p>
      ) : (
        <div className="exercises-list row row-cols-1 row-cols-md-5 g-4">
          {exercises.map((exercise) => (
            <div key={exercise._id} className="col">
              <Exercise exercise={exercise} />
            </div>
          ))}
        </div>
      )}
    </div>

  );
};

export default ExerciseCatalog;
