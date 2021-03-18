import React from 'react';
import Header from './Header';
import Component1 from './Component1';

class Main extends React.Component{
  render() {
    return(
      <div>
        <Header />
        <Component1 />
      </div>
    )
  }
}

export default Main;
