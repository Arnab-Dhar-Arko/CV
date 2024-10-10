// App.js
import React, { useState } from 'react';
import Header from './Header';
import Education from './Education';
import Experience from './Experience';
import RatingButton from './RatingButton';
import Skills from './Skills';

import './styles.css';

const App = () => {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
    updateBackgroundColor(rating);
  };

  const updateBackgroundColor = (rating) => {
    // Example: Change background color based on rating
    switch (rating) {
      case 1:
        document.body.style.backgroundColor = '#ff0000'; // Bad (red)
        break;
      case 2:
        document.body.style.backgroundColor = '#ff4500'; // Not good (orange)
        break;
      case 3:
        document.body.style.backgroundColor = '#ffd700'; // Average (yellow)
        break;
      case 4:
        document.body.style.backgroundColor = '#adff2f'; // Good (green)
        break;
      case 5:
        document.body.style.backgroundColor = '#00ff00'; // Excellent (bright green)
        break;
      default:
        document.body.style.backgroundColor = '#b3d8ff'; // Default color
    }
  };

  return (
    <div className="container">
      <div className="cv-tag">Arnab Dhar</div>

      <div className="section">
        {/* Your content goes here, e.g., Header */}
        <Header />
      </div>

      <div className="section green-border">
        <Education />
      </div>

      <div className="section">
        <Experience />
      </div>

      <div className="section green-border">
        <Skills selectedRating={selectedRating} handleRatingClick={handleRatingClick} />
      </div>
      <div>
      <h1>React Rating Button Example</h1>
      <RatingButton />
    </div>
    </div>
  );
};

export default App;


