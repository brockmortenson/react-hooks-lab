import logo from './logo.svg';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ListItem from './components/ListItem';
import './App.css';

function App() {
  const [ list, setList ] = useState([]);
  
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then((res) => {
      setList(res.data.results)
      // console.log(useState)
    })
  }, [])

  return (
    <div className='App'>
      {list.map((person, index) => {
        return <ListItem name={person.name} key={index} />
      })}
    </div>
  )
}

export default App;
