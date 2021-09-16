import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { MemberPage, SportsPage, UserPage, HomePage } from "./pages/Pages";
function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/sports">
            <SportsPage />
          </Route>

          <Route path="/members">
            <MemberPage />
          </Route>
          <Route path="/user/:userid">
            <UserPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
