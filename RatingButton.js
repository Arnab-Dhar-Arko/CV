// RatingButton.js

import React, { useState } from 'react';

const RatingButton = () => {
  // State to manage the rating value
  const [rating, setRating] = useState(5);

  // Function to update the rating
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Function to get the corresponding message based on the rating
  const getMessage = () => {
    if (rating === 5) {
      return 'Great';
    } else if (rating >= 4) {
      return 'Good';
    } else if (rating >= 3) {
      return 'Average';
    } else {
      return 'Bad';
    }
  };

  return (
    <div>
      <p>Current Rating: {rating}</p>
      <button onClick={() => handleRatingChange(1)}>1</button>
      <button onClick={() => handleRatingChange(2)}>2</button>
      <button onClick={() => handleRatingChange(3)}>3</button>
      <button onClick={() => handleRatingChange(4)}>4</button>
      <button onClick={() => handleRatingChange(5)}>5</button>
      <p>Rating Message: {getMessage()}</p>
    </div>
  );
};

export default RatingButton;
