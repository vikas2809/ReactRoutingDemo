import React, { Component } from 'react';
import { saveUserData } from '../NetworkCall/Backend';
import {withRouter} from "react-router-dom";
import Header from '../Header/Header';
class SignUp extends Component{

    state={
        userName: '',
        firstName: '',
        lastName: '',
        password: '',
        email: ''
    }

    constructor(props){
        super(props);
    }

    handleSubmit(e){
        // alert('inside the submit');
        // console.log('submit the value')
        if(this.refs.username.value===''&&this.refs.firstname.value===''&&this.refs.lastname.value===''&&this.refs.password.value===''&&this.refs.email.value==='')
            alert("Incorrect Response");
        else
        {
            console.log(this.refs.username.value);
            console.log(this.refs.firstname.value);
            console.log(this.refs.lastname.value);
            console.log(this.refs.password.value);
            console.log(this.refs.email.value);
            this.setState({
                userName: this.refs.username.value,
                firstName: this.refs.firstname.value,
                lastName: this.refs.lastname.value,
                email: this.refs.email.value,
                password: this.refs.password.value
            })

            let userInfo={
                userName: this.refs.username.value,
                firstName: this.refs.firstname.value,
                lastName: this.refs.lastname.value,
                email: this.refs.email.value,
                password: this.refs.password.value
            }
            saveUserData(userInfo).then((response)=>{
                console.log(response.success);
                    if(response.success===true)
                    {
                        alert('User registered Successfully!!!');
                        console.log(response.data);
                        console.log(response.data.email)
                        console.log(typeof response.data.email);
                        localStorage.setItem(response.data.email,JSON.stringify(response.data));
                        this.props.history.push("/login");
                    }
                    
                    if(response.status===false)
                        alert(response.message);
                    })
        }
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <Header login={true} signup={false} logout={false} /> 
            <div style={{marginLeft: '20%',marginTop: '5%'}} className="container-fluid">
                <section className="container">
                    <div className="container-page">				
                        <div className="col-md-6">
                            <h3 style={{marginLeft: '20%',marginBottom: '10%',marginTop: '5%'}} className="dark-grey">Registration For New User</h3>
                            
                            <div className="form-group col-lg-12">
                                <label>Username</label>
                                <input type="text" name="" placeholder="username"  className="form-control" ref="username"  />
                            </div>
                            
                            <div className="form-group col-lg-6">
                                <label>FirstName</label>
                                <input type="text" name="" placeholder="firstname" className="form-control" ref="firstname"  />
                            </div>
                            
                            <div className="form-group col-lg-6">
                                <label>LastName</label>
                                <input type="text" name="" placeholder="lastname" className="form-control" ref="lastname"  />
                            </div>

                            <div className="form-group col-lg-12">
                                <label>Password</label>
                                <input type="password" name="" placeholder="password" className="form-control" ref="password"  />
                            </div>
                                            
                            <div className="form-group col-lg-12">
                                <label>Email Address</label>
                                <input type="email" name="" placeholder="email" className="form-control" ref="email"  />
                            </div>
                            
		
                            
                            {/* <div className="col-sm-6">
                                <input type="checkbox" className="checkbox" />Sigh up for our newsletter
                            </div>

                            <div className="col-sm-6">
                                <input type="checkbox" className="checkbox" />Send notifications to this email
                            </div>				 */}
                        
                            <div style={{marginTop: '5%'}} className="form-group col-lg-12">
                                
                            <button type="button" onClick={this.handleSubmit.bind(this)} className="form-control btn btn-primary">Register</button>
                            </div>                        
                            

                        </div>
                    </div>
                </section>
            </div>
            </div>
        )
    }
}

export default SignUp;