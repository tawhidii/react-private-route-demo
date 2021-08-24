
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import ProductDetails from './components/ProductDetails/ProductDetails';


function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
           <HomePage/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/products/:Id">
            <ProductDetails/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
