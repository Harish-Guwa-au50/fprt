import axios from "axios";
import './home.css'
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Home = () => {
    const history=useHistory()
    const[data,setData]=useState([" "])
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res=>setData(res.data))
        .catch(err=> console.log(err))

    },[])
   

    return (
        <div className=" maindiv d-flex flex-column justify-content-center align-items-center bg-light vh-100">
     <button  className="logout" onClick={()=>history.push('/landingpage')}> Logout</button>
      <h1> List of Medicines</h1>
      <div className  ="w-75 rounded bg-white border shadow p-4"></div>
      
          <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th> Name</th>
                    <th> Price</th>
                    <th> Purpose</th>
                    <th> Action</th>
                    <button className="btn btn-sm btn-primary me-2"> Edit</button>
                               <button className="btn btn-sm btn-danger"> Delete</button>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((d,i)=>{
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.price}</td>
                            <td>{d.purpose}</td>
                           
                            <td>
                               <button className="btn btn-sm btn-primary me-2"> Edit</button>
                               <button className="btn btn-sm btn-danger"> Delete</button>

                            </td>

                        </tr>
                    })
                }
            </tbody>
          </table>
        </div>


    )
}
export default Home;
