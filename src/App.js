import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage'
import CheckoutCard from './components/CheckoutCard';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { useEffect } from 'react';
import { auth } from './firebase';
import { actionTypes } from './reducer';
import {useStateValue} from './StateProvider'
import Checkout from './components/CheckoutForm/Checkout';

function App() {

    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log(authUser);
            if(authUser){
                dispatch({
                    type: actionTypes.SET_USER,
                    user: authUser
                    
                })
            }
        }) 
    }, []);

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path='/checkout-form'>
                        <Checkout />
                    </Route>
                    <Route path='/signup'>
                        <SignUp />
                    </Route>
                    <Route path='/signin'>
                        <SignIn />
                    </Route>
                    <Route path='/checkout-page'>
                        <CheckoutPage />
                    </Route>
                    <Route path='/'>
                        <Products />
                    </Route>
                </Switch>




            </div>
        </Router>

    );
}

export default App;
