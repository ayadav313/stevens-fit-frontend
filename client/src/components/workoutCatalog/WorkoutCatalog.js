import React, { useState, useEffect } from 'react';
import './WorkoutCatalog.scss';
import Workout from '../common/Workout'


const WorkoutCatalog = () => {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  const fetchWorkouts = async () => {
    // Comment out the API request
    
    try {
      const response = await fetch('http://localhost:3000/workouts');
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setWorkouts(data);
    } catch (error) {
      console.error('Failed to fetch workouts:', error);
      setError(error.message);
    }
    

    // // Use dummy data
    // const dummyData = [
    //   {
    //     _id: "1",
    //     name: "Workout 1",
    //     creator: "John",
    //     exerciseLogs: [
    //       {
    //         exerciseId: "612db8f48a7c18bf22004b0a",
    //         sets: 3,
    //         reps: 8,
    //         additionalDetails: "Rest two minutes between sets",
    //       },
    //     ],
    //   },
    //   {
    //     _id: "2",
    //     name: "Workout 2",
    //     creator: "Jane",
    //     exerciseLogs: [
    //       {
    //         exerciseId: "612db8f48a7c18bf22004b0b",
    //         sets: 4,
    //         reps: 12,
    //         additionalDetails: "Rest one minute between sets",
    //       },
    //       {
    //         exerciseId: "612db8f48a7c18bf22004b0b",
    //         sets: 4,
    //         reps: 12,
    //         additionalDetails: "Rest one minute between sets",
    //       },
    //     ],
    //   },
    // ];

    // setWorkouts(dummyData);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div className="workout-catalog">
      <h3>Workout Catalog</h3>
      {error ? (
        <p className="error-message">Failed to load workouts: {error}</p>
      ) : (
        <div className="workouts-list row row-cols-1 row-cols-md-5 g-4">
          {workouts.map((workout) => (
            <div key={workout._id} className="col">
              <Workout workout={workout} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutCatalog;


// const fetchExercise = async (exerciseId) => {
//   try {
//     const response = await fetch(`http://localhost:3000/exercises/${exerciseId}`);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const exerciseData = await response.json();
//     return exerciseData;
//   } catch (error) {
//     console.error(`Failed to fetch exercise ${exerciseId}:`, error);
//     throw error;
//   }
// };