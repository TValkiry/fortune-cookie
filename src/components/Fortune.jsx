import { useState, useEffect } from 'react';
import data from '../assets/phrases.json'

function Fortune () {
    const [fortune, setFortune] = useState({});
  
    function handleClick() {
      const randomFortune = data[Math.floor(Math.random() * data.length)];
      setFortune(randomFortune);
    }    


        // Parte visual




        return (
            <div>
              
              <h1> {fortune.phrase}</h1>
              <br />
              <h1> {fortune.author}</h1>
              <br />
              <button style={{ display: 'inline-block', verticalAlign: 'middle' }}onClick={handleClick}> Generar Fortuna</button>
            </div>
          );
        
};

export default Fortune;

