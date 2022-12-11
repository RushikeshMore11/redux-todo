import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
const Input = () => {
    const [todo,setTodo] = useState('');
    const data = useSelector(state=>state.inputReducer);
    
    const handleInput = (e) =>{
        setTodo(e.target.value);
    }
    const pushData = (e) =>{
        e.preventDefault();
        const id = Math.floor(Math.random()*10000);
        console.log("id is ",id);
        data.push({name:todo,id:id});
        console.log(data);
    }
  return (
    <>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%" }}>
    <form>
    <input value={todo} onChange={handleInput} type="text" placeholder='Enter your Name'/>
    <div><center><button value='submit' onClick={pushData} style={{padding:"10px 20px",margin:10}}>Submit</button></center></div>
    </form>
    </div>
    <div  style={{justifySelf:"flex-end",width:"100px",backgroundColor:"#bac",textAlign:"center",margin:"auto",cursor:"pointer"}}><Link to='/input/list' >Show List</Link></div>
    </>
  )
}

export default Input;