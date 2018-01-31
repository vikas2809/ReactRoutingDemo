import React,{ Component } from 'react';
import Header from '../Header/Header';
class Welcome extends Component{
    render(){
        return(
            <div>
                <Header login={true} signup={true} logout={false} />
                <div className="container-fluid">
                    <h1 style={{textAlign: "center",marginTop:'5%',marginBottom: '10%'}}>Welcome to React Routing Demo.</h1>
                    <div style={{height:"20%"}}>
                    <img src={require('../images/welcome.png')} alt="welcome" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome;