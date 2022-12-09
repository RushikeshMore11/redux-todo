import React from 'react'

const Input = () => {
    const handleAddBtn = () =>{
        alert("Hello, clicked add");
    }
  return (
    <>
        <div><input type="text" placeholder='Add a todo'  /></div>
        <button onClick={handleAddBtn}>Add</button>
    </>
  )
}

export default Input;