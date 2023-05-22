import './App.css';
import BuyerLogin from './components/Buyer/buylogin';
import BuyerRegister from './components/Buyer/buyregister';
import SellerLogin from './components/Seller/login';
import SellerRegister from './components/Seller/register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Landingpage from './components/landingpage';






function App() {


  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/" >
            <Home />
            <Landingpage />
          </Route>

          <Route path='/Buyerlogin' >
            <BuyerLogin />
          </Route>
          <Route path='/Buyerregister'>
            <BuyerRegister />
          </Route>
          <Route path='/Sellerlogin' >
            <SellerLogin />
          </Route>
          <Route path='/Sellerregister'>
            <SellerRegister />
          </Route>


        </Switch>
      </Router>

    </div>
  );
}

export default App;
