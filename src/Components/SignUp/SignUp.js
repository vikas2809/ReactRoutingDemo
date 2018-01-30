import React, { Component } from 'react';
class SignUp extends Component{
    render(){
        return(
            <div style={{marginLeft: '20%',marginTop: '5%'}} className="container-fluid">
                <section className="container">
                    <div className="container-page">				
                        <div className="col-md-6">
                            <h3 style={{marginLeft: '20%',marginBottom: '10%',marginTop: '5%'}} className="dark-grey">Registration For New User</h3>
                            
                            <div className="form-group col-lg-12">
                                <label>Username</label>
                                <input type="" name="" placeholder="username" className="form-control" id="" value="" />
                            </div>
                            
                            <div class="form-group col-lg-6">
                                <label>FirstName</label>
                                <input type="password" name="" placeholder="firstname" className="form-control" id="" value="" />
                            </div>
                            
                            <div className="form-group col-lg-6">
                                <label>LastName</label>
                                <input type="password" name="" placeholder="lastname" className="form-control" id="" value="" />
                            </div>

                            <div class="form-group col-lg-6">
                                <label>Password</label>
                                <input type="password" name="" placeholder="password" className="form-control" id="" value="" />
                            </div>
                            
                            <div className="form-group col-lg-6">
                                <label>Repeat Password</label>
                                <input type="password" name="" placeholder="retype password" className="form-control" id="" value="" />
                            </div>
                                            
                            <div className="form-group col-lg-12">
                                <label>Email Address</label>
                                <input type="" name="" placeholder="email" className="form-control" id="" value="" />
                            </div>
                            
		
                            
                            {/* <div className="col-sm-6">
                                <input type="checkbox" className="checkbox" />Sigh up for our newsletter
                            </div>

                            <div className="col-sm-6">
                                <input type="checkbox" className="checkbox" />Send notifications to this email
                            </div>				 */}
                        
                            <div style={{marginTop: '5%'}} className="form-group col-lg-12">
                                
                            <button type="submit" className="form-control btn btn-primary">Register</button>
                            </div>                        
                            

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default SignUp;