import { getAllStarships } from './services/sw-api';
import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getAllStarships()
      .then((starships) => setStarships(starships))
      .catch((error) => console.error('Error fetching starships:', error));
  }, []);
  return (
    <div className="App">
    <div className='header'>STAR WARS STARSHIPS</div>
      <div className="card-container">
        {starships.map((starship) => (
          <div key={starship.name} className="card">
            {starship.name}
          </div>
        ))}
      </div>
    </div>
  )

  
}

export default App;
