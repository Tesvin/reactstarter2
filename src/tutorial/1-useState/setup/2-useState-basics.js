import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [text, setText] = useState('random title');

  const handleClick = () => {

    text === "random title" ? setText("hello world") : setText("random title")

    // if (text === 'random title') {
    //   setText('hello word')
    // } else {
    //   setText('random title')
    // }
  }

  return (
  <React.Fragment>
    <h1>{text}</h1>
    <button type='button' className='btn' onClick={handleClick}>change me</button>
  </React.Fragment>
  )
};

export default UseStateBasics;
