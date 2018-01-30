import React, { Component } from 'react';
import Routing from './Components/RoutePath/Routing';
import Header from './Components/Header/Header';

class App extends Component {
   render() {
      return (
        <div>
          <Header />
          <Routing />
          </div>
      );
   }
}
export default App;