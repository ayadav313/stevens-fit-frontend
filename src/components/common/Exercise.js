import './Exercise.scss';
import React, { useState } from 'react';

const Exercise = ({ exercise }) => {
    const [showDetails, setShowDetails] = useState(false);
  
    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };
  
  
    return (
      <div className="exercise-item card" onClick={toggleDetails}>
        <h4 className="card-header">{exercise.name}</h4>
        <div className="card-body" style={{ display: showDetails ? 'block' : 'none' }}>
          <p className="exercise-details">Target: {exercise.target}</p>
          <p className="exercise-details">Body Part: {exercise.bodyPart}</p>
          <p className="exercise-details">Equipment: {exercise.equipment}</p>
          <img src={exercise.gifUrl} alt={exercise.name} className="img-fluid" />
          {/* Add any additional exercise information here */}
        </div>
      </div>
    );
  };
  
export default Exercise;
  