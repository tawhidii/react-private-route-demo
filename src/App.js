
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router, Switch,
} from "react-router-dom";
import Home from './components/Home/Home';
function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        
      </Switch>

    </Router>
  );
}

export default App;
