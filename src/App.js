
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';


function App() {
  return (
    <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">

          </Route>
        </Switch>
    </Router>
  );
}

export default App;
