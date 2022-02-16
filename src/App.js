import logo from './logo.svg';
import './App.css';
import Home from './pages/hom';

import Contact from './pages/contact';
import About from './pages/about';
import {Link,Route,BrowserRouter,Switch} from 'react-router-dom';
import Login from './pages/login';

import { Navbar,Container,Nav,NavDrop,Button} from 'react-bootstrap';
import Logins from './pages/logins';
function Ea(){
  return(
    <div>
      <h3>hkhk</h3>
    </div>
  );

}

function App() {
  return (
    <div >
      <nav>
        <ul>
          <li>
            <Link to="/">Home3</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
  
     <Switch>
        <Route exact path="/" component={Ea}>
        <Logins />
        </Route>

        <Route exact path="/about">
          <Button variant="primary" size="lg" active>
    Primary button
  </Button>
         <Home/>
        </Route>
     
        <Route exact  path="/contact">
         <Login/>
        </Route>
       
     </Switch>






<div className="row">
  <div className="col-10"> 
  <div className="backbox"></div>
  </div>
  <div className="col-2"> hihi
  </div>
  
</div>
     
    </div>
  );
}

export default App;
