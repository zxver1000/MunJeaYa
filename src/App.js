import "./style/App.css";
import "./style/main.css";

import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { Navbar, Container, Nav, NavDrop, Button } from "react-bootstrap";

import Main from "./views/main";
import Home from "./views/home";
import About from "./views/about";
import Contact from "./views/contact";
import Login from "./views/login/login";
import Logins from "./views/login/logins";
import StudentManage from "./views/StudentManage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Logins />
        </Route>

        <Route exact path="/main">
          <Main />
        </Route>

        <Route exact path="/contact">
          <Login />
        </Route>

        <Route exact path="/StudentManage">
          <StudentManage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
