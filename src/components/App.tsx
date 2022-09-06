import React, { Component } from 'react';
import  { Switch, Route } from 'react-router-dom';
import routes from './routes';
import '../../public/styles/style1.css';
import '../../public/styles/tablet1.css';
import '../../public/styles/mobile.css';

export class App extends Component<any> {
  render() {
    return (
      <div className='main_wrap'>
          <Switch>
            {routes.map((route:any, i:number) => (
              <Route
              key={i}
              path={route.path}
              exact={route.exact}
              component={route.component}
              />
            ))}
          </Switch>
      </div>
    )
  }
}
