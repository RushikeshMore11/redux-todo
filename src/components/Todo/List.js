import React from 'react'
import { useSelector } from 'react-redux';

const List = () => {
    const data = useSelector(state=>state.inputReducer);
    
  return (
    <>
        <div>
            {data}
        </div>
        <h1>Hello </h1>
    </>
  )
}

export default List;