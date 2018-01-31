import React, { Component } from 'react';
import Routing from './Components/RoutePath/Routing';
import Header from './Components/Header/Header';

class App extends Component {
   render() {
      return (
        <div>
          {/* <Header login={true} signup={true} logout={false} /> */}
          <Routing />
          </div>
      );
   }
}
export default App;