
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Salad from './components/Salad/Salad';
import Pizza from './components/Pizza/Pizza';
import Steak from './components/Steak/Steak';
import Drink from './components/Drink/Drink';
import Burger from './components/Burger/Burger';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/burger'>
          <Burger></Burger>
        </Route>

        <Route path='/salad'>
          <Salad></Salad>
        </Route>

        <Route path='/pizza'>
          <Pizza></Pizza>
        </Route>

        <Route path='/steaks'>
          <Steak></Steak>
        </Route>

        <Route path='/drinks'>
          <Drink></Drink>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/register">
          <Register/>
        </Route>

        <Route path="*">
          <NotFound/>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
