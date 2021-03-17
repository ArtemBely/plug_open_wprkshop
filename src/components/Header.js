import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
  render() {
    return(
      <div className='header'>
       <div></div>
        <div id='logo'>Collab</div>
          <NavLink to='/work' className='how_does_it_work header_elements' activeClassName='active_header'>Как это работает</NavLink>
            <NavLink to='/contracts' className='contracts header_elements' activeClassName='active_header'>Договора</NavLink>
            <NavLink to='/finances' className='finances header_elements' activeClassName='active_header'>Финансы</NavLink>
          <NavLink to='/clients' className='clients header_elements' activeClassName='active_header'>Клиенты</NavLink>
        <div></div>
      </div>
    )
  }
}

export default Header;