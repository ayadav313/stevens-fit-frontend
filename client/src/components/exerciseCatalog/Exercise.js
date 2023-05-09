import React, { useState } from 'react';
import './Exercise.scss';

const Exercise = ({ exercise }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`exercise-item${isExpanded ? ' expanded' : ''}`}
      onClick={handleClick}
    >
      <h4>{exercise.name}</h4>
      <div className="exercise-details">
        <p>Target: {exercise.target}</p>
        <p>Body Part: {exercise.bodyPart}</p>
        <p>Equipment: {exercise.equipment}</p>
        <img src={exercise.gifUrl} alt={exercise.name} />
        {/* Add any additional exercise information here */}
      </div>
    </div>
  );
};

export default Exercise;
