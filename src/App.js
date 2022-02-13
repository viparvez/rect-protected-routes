import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import Cards from "./Pages/Cards";
import ProtectedRoutes from "./ProtectedRoutes";
import useAuth from "./Hooks/useAuth";

function App() {
  const [isAuth, login, logout] = useAuth(false);
  return (
    <div>
      <h2>Protected Routes</h2>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/cards">Cards</Link>
          </li>
        </ul>
        {isAuth ? (
          <>
            <div>You are logged in...</div>
            <button onClick={logout}>LOGOUT</button>
          </>
        ) : (
          <>
            <div>You are logged out...</div>
            <button onClick={login}>LOGIN</button>
          </>
        )}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cards" component={Cards} />
          <ProtectedRoutes path="/account" component={Account} auth={isAuth} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
