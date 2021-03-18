import React from 'react';
import Header from './Header';
import Component1 from './Component1';
import Dialog from './Dialog';

class Main extends React.Component{
  render() {
    return(
      <div>
        <Header />
        <Component1 />
        <Dialog />
      </div>
    )
  }
}

export default Main;
