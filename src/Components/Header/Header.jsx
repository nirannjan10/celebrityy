import React, { useState } from 'react';
import './Header.css';
import search from '../../assets/search.png';

const Header = ({ handleInputChange,query }) => {
  return (
    <div>
      <h1 className='header'>List view</h1>
      <div className='search-container'>
        <div className='search-input-container'>
          <input 
            className='search-input'
            type='text'
            placeholder='Search user'
            value={query}
            onChange={handleInputChange}
          />
          <img className='search-icon' src={search} alt="" />
        </div>
      </div>
    </div>  
  );
}

export default Header;
