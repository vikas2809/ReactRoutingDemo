import React, { Component } from 'react';

class Home extends Component
{
    render(){
        return(
            <div className="home">
             <h1>Home Component </h1>
                <img src={require('../images/home2.jpg')} alt="home" />
               
            </div>
        );
    }
}

export default Home;