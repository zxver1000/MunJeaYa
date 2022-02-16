
import React from 'react';
import { Navbar,Container,Nav,NavDrop,Button} from 'react-bootstrap';
import {Link, Route, Switch} from 'react-router-dom';
const Logins = () =>{


    return (
        <div class="wrap">
<div class="login">
    <h2>MunJeaYa</h2>
    <div class="login_sns">
    <li><a href=""><i class="fab fa-instagram"></i></a></li>
    <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
    <li><a href=""><i class="fab fa-twitter"></i></a></li>
    </div>
    <div class="login_id">
        <h4>ID</h4>
        <input />
    </div>
    <div class="login_pw">
        <h4>Password</h4>
       <input />
           </div>
    <div class="login_etc">
        <div class="checkbox">
      
        </div>
        <div class="forgot_pw">
            
        <a href="">Forgot Password?        </a>
        <Link to="/about">
        <Button variant="primary">Login</Button>
        </Link>
    </div>
    </div>
    <div class="submit">
        
    </div>
</div>
</div>
    );
};

export default Logins;

