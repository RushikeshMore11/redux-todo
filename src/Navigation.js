import React from 'react';
import {Link} from "react-router-dom";
import './Style/index.css'
const Navigation = () => {
  return (
    <>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"#abc",padding:"10px",zIndex:1000}}>
            <div><button><Link to='/'>Home</Link></button></div>
            <div><button><Link to='/about'>About</Link></button></div>
            <div><button><Link to='/contact' >Contact</Link></button></div>
            <div><button><Link to='/input' >Input</Link></button></div>
        </div>
    </>
  )
}

export default Navigation