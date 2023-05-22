import './home.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Home = () => {
    const history = useHistory()

    return (
        <div>
            svxx
        </div>

        // <div>
        //     <div className="button" onClick={() => history.push('/Buyerregister')} > BUYER</div>
        //     <div className="button" onClick={() => history.push('/Sellerregister')} > SELLER</div>
        // </div>

    )
}
export default Home;