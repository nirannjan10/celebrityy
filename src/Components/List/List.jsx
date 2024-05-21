import React from 'react'
import { useState } from 'react';
import './List.css'
import Mylist from './Mylist'
import Header from '../Header/Header';

const List = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) =>{
    setQuery(e.target.value);
  };
  return (
    <div>
      <Header handleInputChange={handleInputChange} query={query}/>
      <Mylist query={query}/></div>
  )
}

export default List