import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
class Header extends Component{
    render(){
        var loginDiv;var logoutDiv;var signupDiv;
        if(this.props.login===true)
            loginDiv=<a className="nav-link" ><i className="fa fa-sign-in fa-2x"></i> Login</a>;
        if(this.props.signup===true)
            signupDiv= <a className="nav-link"><i className="fa fa-user-plus fa-2x"></i> SignUp</a>;
        if(this.props.logout===true)
            logoutDiv=<a className="nav-link"><i className="fa fa-sign-out fa-2x"></i> Logout</a>;
        return(     
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <a className="navbar-brand" href="#">
                <img src="https://image.freepik.com/free-icon/xbox-logo_318-9975.jpg" alt="logo" style={{marginTop:"-5%",width:40}} />
                    <h3 style={{marginLeft:'35%',marginTop:"-22%"}}>React Routing</h3>
                </a>
                <ul className="navbar-nav ml-auto">
                    <li className="navbar-item">
                        <Link to={'/login'}>
                            {loginDiv}
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to={'/signup'}>
                           {signupDiv}
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to={'/logout'}>
                            {logoutDiv}
                        </Link>
                    </li>
                </ul>
        </nav>
        );
    }
}


export default Header;