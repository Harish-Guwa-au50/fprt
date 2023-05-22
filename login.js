import axios from "axios";

import React, { useState } from "react";
import './login.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export default function SellerLogin(){
    const history=useHistory()
    const[user,setUser]=useState({
        email:"",
        password:""
    })
    const handleChange=e=>{
        const{name,value}=e.target;
        setUser({
            ...user,
            [name]:value
        })
    }
    const login=()=>{
        axios.post('http://localhost:8000/Sellerlogin',user)
        .then(res=>{
            alert(res.data.message)
            history.push('/h')
        })
    }
    
    return(
        <div className="login">
    <input type="text" name="email" value={user.email} onChange={handleChange}  placeholder="Your mailId"/>
        <input type="password"  name="password" value={user.password}  onChange={handleChange} placeholder="Your password"/>       
        <div className="button"onClick={login} > LOGIN</div>
              <div > or</div>
              <div className="button " onClick={()=>history.push('/Sellerregister')}> REGISTER</div>
        </div>
    )
}
