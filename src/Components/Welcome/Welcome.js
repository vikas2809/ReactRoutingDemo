import React,{ Component } from 'react';

class Welcome extends Component{
    render(){
        return(
            <div class="container-fluid">
                <h1 style={{textAlign: "center",marginTop:'5%',marginBottom: '10%'}}>Welcome to React Routing Demo.</h1>
                <div style={{height:"20%"}}>
                <img src={require('../images/welcome.png')} alt="welcome" />
                </div>
            </div>
        )
    }
}

export default Welcome;