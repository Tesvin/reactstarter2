import React, {useState} from 'react';

const ErrorExample = () => {
  const [title, setTitle] = useState("random words");

  const handleClick = () => {
    if (title === "random words") {
      setTitle("happy hallowen")
    } else {
      setTitle("random words")
    }

  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>change</button>
    </React.Fragment>
  )
};

export default ErrorExample;