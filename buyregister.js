import React, { useState } from "react";
import './register.css';
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
 export default function  BuyerRegister(){
     const history=useHistory()

     const[user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
     })
    
     const handleChange =e =>{
        const{name, value}= e.target;
        setUser({
            ...user,
            [name]:value
        })
         }
         const register= ()=>{
            const {name,email,password ,reEnterPassword}=user;
             if(name && email && password &&(password === reEnterPassword)){
                axios.post('http://localhost:8000/Buyerregister',user)
                .then(res=>
                  {
                     alert(res.data.message);
                     history.push('/')
                  }
                )
             }
           
         }
       

      return(
        <div className="register" >
      
        <h1>  <u> Register</u> </h1>
      
        <input type="text"  name="name" value={user.name} onChange={handleChange} placeholder=" Your Name"/>
        <input type="text" name="email" value={user.email} onChange={handleChange}  placeholder="Your mailId"/>
        <input type="password"  name="password" value={user.password}  onChange={handleChange} placeholder="Your password"/>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange}  placeholder="Re-enter password"/>
              <div className="button"onClick={register} > REGISTER</div>
              <div > or</div>
              <div className="button " onClick={()=>history.push('/Buyerlogin')}> LOGIN</div>
        </div>
      )
 }

