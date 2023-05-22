import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Landingpage = () => {
    // const history = useHistory()
    // const login=()=>{
    //     axios.post('http://localhost:8000/landingpage')
    //     .then(res=>{
    //         alert(res.data.message)
    //         // history.push('/h')
    //     })
    // }

    return (

        <div>
            <div className="button" onClick={() => history.push('/Buyerregister')} > BUYER</div>
            <div className="button" onClick={() => history.push('/Sellerregister')} > SELLER</div>
        </div>

    )
}
export default Landingpage;