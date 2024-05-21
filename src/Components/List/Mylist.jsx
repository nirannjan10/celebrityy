import React, { useState } from 'react';
import celebrities from '../../assets/celebrities.json';
import draw from '../../assets/draw.png';
import del from '../../assets/delete.png';
import './Mylist.css';

// Function to calculate age based on date of birth
function calculateAge(dob) {
  const dobDate = new Date(dob);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - dobDate.getFullYear();

  if (
    currentDate.getMonth() < dobDate.getMonth() ||
    (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())
  ) {
    age--;
  }

  return age;
}

const Mylist = ({ query }) => {
  const [details, setDetails] = useState({});

  const toggleDetails = (id) => {
    setDetails(prevDetails => ({
      ...prevDetails,
      [id]: !prevDetails[id]
    }));
  };

  // Filter celebrities based on the query
  const filteredCelebrities = celebrities.filter(celeb =>
    celeb.first.toLowerCase().includes(query.toLowerCase()) ||
    celeb.last.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {filteredCelebrities.map(celeb => (
        <div className='main' key={celeb.id}>
          <div className='closed'>
            <img src={celeb.picture} alt={`${celeb.first} ${celeb.last}`} />
            <p className='name'>{celeb.first} {celeb.last}</p>
            <p className='plus' onClick={() => toggleDetails(celeb.id)}>{details[celeb.id] ? '-' : '+'}</p>
          </div>

          {details[celeb.id] && (
            <>
              <div className='details-container'>
                <div className='details-line'>
                  <div className='age'>
                    <p>Age</p>
                    <span>{calculateAge(celeb.dob)}</span> {/* Calculate and display age */}
                  </div>
                  <div className='gender'>
                    <p>Gender</p>
                    <span>{celeb.gender}</span>
                  </div>
                  <div className='country'>
                    <p>Country</p>
                    <span>{celeb.country}</span>
                  </div>
                </div>
                <div className='description'>
                  <p>Description</p>
                  <span>{celeb.description}</span>
                </div>
                <div className='actions'>
                  <img className='delete' src={del} alt='Delete' />
                  <img className='draw' src={draw} alt='Draw' />
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default Mylist;
