import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Layout1 from './Layout1';
import Layout2 from './Layout2';

class Choose extends React.Component{
  render() {
    return(
      <div className='wrap_choose'>
       <Route exact path='/add'>
         <div className='choose'>
            <p className='choose_layout'>Выберите шаблон или загрузите свой документ</p>
            <NavLink className='link_to_layOne' to='/first_layout'> <p className='first_layout'>Шаблон договора о возмездном оказании услуг</p></NavLink>
            <NavLink className='link_to_layTwo' to='/second_layout'> <p className='second_layout'>Шаблон договора о займе</p></NavLink>
          </div>
         <NavLink to='/upload' className='upload'><p className='upload_inside'>Загрузить свой PDF</p></NavLink>
        </Route>
        <Route exact path='/first_layout' component={Layout1} />
        <Route exact path='/second_layout' component={Layout2} />
      </div>
    )
  }
}

export default Choose;
