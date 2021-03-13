import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/league/:leagueId">
              <LeagueDetails></LeagueDetails>
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/league">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
