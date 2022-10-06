import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const Person = () => {
    const {id} = useParams()
    const [name, setName] = useState('default name')

    useEffect(() =>{
      const newPerson = data.find((Person) => Person.id === parseInt(id))
      setName(newPerson.name)
    })
  }
  return (
    <div>
      <h2>{person.name}</h2>
      <Link to='/people'>People Link</Link>
    </div>
  );
};

export default Person;
