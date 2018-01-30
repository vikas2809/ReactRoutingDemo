import React, { Component } from 'react';

class Login extends Component
{
    render(){
        return(
            <div>
                 <form>
                   {/* <div>
                        <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                    </div> */}
                    <div className="container">
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                            
                        <button type="submit">Login</button>
                    </div>
                    <div className="container" style={{color:"#f1f1f1"}}>
                        <button type="button" className="cancelbtn">Cancel</button>
                        {/* <span className="psw">Forgot <a href="#">password?</a></span> */}
                    </div>
                </form>
            </div>
        );
    }
}


export default Login;