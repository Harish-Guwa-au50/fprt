import React from 'react';
import axios from 'axios';
import './landing.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Landingpage = () => {
    const history = useHistory()
    const login=()=>{
        axios.post('http://localhost:8000/landingpage')
        .then(res=>{
            alert(res.data.message)
            // history.push('/h')
        })
    }

    return (
  

        <div className='container'>
            <h1> Are You A </h1>
          
            <div className="c1" onClick={() => history.push('/Buyerregister')} > BUYER</div>
         
            <div className="c2" onClick={() => history.push('/Sellerregister')} > SELLER</div>
        </div>

    )
}
export default Landingpage;
