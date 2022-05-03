import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//@ts-ignore
import { App } from '../components/App';
import  { hydrate }  from 'react-dom';
var window:any;
hydrate(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('app')
);
