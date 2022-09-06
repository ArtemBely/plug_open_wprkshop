import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import '../../public/styles/style1.css';
import '../../public/styles/tablet1.css';
import '../../public/styles/mobile.css';
export class App extends Component {
    render() {
        return (React.createElement("div", { className: 'main_wrap' },
            React.createElement(Switch, null, routes.map((route, i) => (React.createElement(Route, { key: i, path: route.path, exact: route.exact, component: route.component }))))));
    }
}
