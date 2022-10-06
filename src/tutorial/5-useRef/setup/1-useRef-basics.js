import { render } from '@testing-library/react';
import React, { useEffect, useRef, useState } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const [name, setName] = useState('')
  const inputRef = useRef()

  function focus() {
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  )
}

  // const refCell = useRef(null)
  // const divRef = useRef(null )

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(refCell.current.value)
  //   console.log(divRef.current.value)
  // }
  // console.log(refCell)
  // return (
  //   <>
  //   <form onSubmit={handleSubmit}>    
  //     <div className='form'>
  //       <input type='text'ref={refCell}/>
  //       <button type='submit'>submit</button>
  //     </div>
  //   </form>
  //   <div>Render Count: {refCell.current}</div>
  //   </>
  // )

export default UseRefBasics;
