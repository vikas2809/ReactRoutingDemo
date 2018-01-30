import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component
{
    render(){
        return(
            <div className="container">
	            <div style={{marginTop: '10%',marginLeft: '25%',width: '50%'}} className="login">
		            <h4>Login to Web App</h4>
			        <hr />
                        <form className="login-inner">
                            <input style={{marginBottom: '2%',textAlign: 'center'}} type="email" className="form-control email" id="email-input" placeholder="Enter email" />
                            <input style={{marginBottom: '2%',textAlign: 'center'}} type="password" className="form-control password" id="password-input" placeholder="Password" />
                            <input style={{marginBottom: '3%'}} className="btn btn-block btn-lg btn-success submit" type="submit" value="Login" />
                        </form>
                        <Link to={'/signup'}><a href="#" style={{marginTop:'5%',width:'49%'}} className="btn btn-sm btn-primary register">Register</a></Link>
                    <a style={{marginTop:'5%',marginLeft: '2%',width:'49%'}} className="btn btn-sm btn-default forgot"> Forgot your password?</a>
	            </div>
            </div>
        );
    }
}


export default Login;