import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { authenticateUser } from '../NetworkCall/Backend';
import Header from '../Header/Header';
class Login extends Component
{
    state={
        email: '',
        password: '',
        login: true,
        logout: false,
        signup: true,
    }

    constructor(props){
        super(props);
    }

    login(e){
        if(this.refs.email.value===''&&this.refs.password.value==='')
            alert('Please provide your email & password')
        else if(this.refs.email.value!==''&&this.refs.password.value!=='')
        {
            console.log(this.refs.email.value);
            console.log(this.refs.password.value);
            this.setState({
                email: this.refs.email.value,
                password: this.refs.password.value
            })
        
            authenticateUser(this.refs.email.value,this.refs.password.value)
            .then((responseData)=>{
                console.log(responseData);
                if(responseData.success===false)
                    alert(responseData.message);
                if(responseData.success===true)
                {
                    localStorage.setItem('token',responseData.token);
                    console.log(responseData.token);
                    console.log('token',typeof responseData.token);
                    this.props.history.push("/home");
                }       
            })
        }
        else
            alert('Please provide correct inputs');
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <Header login={false} signup={true} logout={false} />
                <div className="container"> 
	            <div style={{marginTop: '10%',marginLeft: '25%',width: '50%'}} className="login">
		            <h4>Login to Web App</h4>
			        <hr />
                        <form className="login-inner">
                            <input style={{marginBottom: '2%',textAlign: 'center'}} type="email" className="form-control email" ref="email" placeholder="Enter email" />
                            <input style={{marginBottom: '2%',textAlign: 'center'}} type="password" className="form-control password" ref="password" placeholder="Password" />
                            <input style={{marginBottom: '3%'}} className="btn btn-block btn-lg btn-success submit" onClick={this.login.bind(this)} type="submit" value="Login" />
                        </form>
                        <Link to={'/signup'}><a href="#" style={{marginTop:'5%',width:'49%'}} className="btn btn-sm btn-primary register">Register</a></Link>
                    <a style={{marginTop:'5%',marginLeft: '2%',width:'49%'}} className="btn btn-sm btn-default forgot"> Forgot your password?</a>
	            </div>
                </div>
            </div>
        );
    }
}


export default Login;