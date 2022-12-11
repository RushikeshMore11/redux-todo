import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementValue, incrementValue } from '../redux/actions';

const Home = () => {
  const {count} = useSelector(store=>store.ourStore);
  // console.log(count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Welcome to Home Page </h1>
    </>
  )
}

export default Home