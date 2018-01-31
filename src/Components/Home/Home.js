import React, { Component } from 'react';
import Header from '../Header/Header';

class Home extends Component
{
    render(){
        return(
            <div>
                <Header login={false} signup={false} logout={true} />
                <div className="container-fluid">
                    <h1>Home Component</h1>  
                </div>
            </div>
        );
    }
}

export default Home;