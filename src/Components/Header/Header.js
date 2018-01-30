import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
class Header extends Component{
    render(){
        return(
            <div>
                <header className="customHeader">
                    <div>
                        <h1 style={{}}>React Routing Demo</h1>
                    </div>
                  
                    <div className="link">
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/login'}>Login</Link></li>
                        </ul>
                    </div>
                </header>
            </div>
        );
    }
}


export default Header;