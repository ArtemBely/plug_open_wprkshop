import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import photo from '../../public/images/Ellipse 7.svg';
import burger from '../../public/images/Group 48.svg';
import Choose from './Choose';

class Profile extends React.Component{

  constructor() {

    super()
  }

  render() {
      return(
        <div className='wrap_profile'>
        			<div className='account_prof'>
        				<p className='popo_logo'>Collab</p>
        				<NavLink to='#' className='profile_header' id='documents_profile' activeClassName='active_header'>Документы</NavLink>
        				<NavLink to='#' className='profile_header' id='finances_profile' activeClassName='active_header'>Финансы</NavLink>
        				<NavLink to='#' className='profile_header' id='clients_profile' activeClassName='active_header'>Клиенты</NavLink>
        				<NavLink to='#' className='profile_header' id='help_profile' activeClassName='active_header'>Помощь</NavLink>
        				<div className='wrap_photo'>
        					<img src={photo} className='profile_photo'/>
        				</div>
        				<p className='profile_name'>Константин</p>
        			</div>

            <Route exact path='/profile'>
      			<div className='profile_menu'>
      				  <div className='wrap_profile_burger'>
      					<img src={burger} id='profile_burger'/>
      				  </div>
        				<NavLink to='#' className='menu' id='date' activeClassName='active_header'>↓ По дате</NavLink>
        				<NavLink to='#' className='menu' id='alphabet' activeClassName='active_header'>По алфавиту</NavLink>
        				<NavLink to='#' className='menu' id='categories' activeClassName='active_header'>По категории</NavLink>
        				<NavLink to='#' className='menu' id='signed' activeClassName='active_header'>↓ Подписано</NavLink>
        				<NavLink to='#' className='menu' id='wait' activeClassName='active_header'>Ожидает подписания</NavLink>
        				<NavLink to='#' className='menu' id='everything' activeClassName='active_header'>Все</NavLink>
        				<NavLink to='#' className='menu' id='favorites' activeClassName='active_header'>Избранное</NavLink>
        				<input type='text' className='menu' id='search' placeholder='Поиск' />
      			</div>
            </Route>
            <div className='allDocuments'>
               <Route exact path='/profile'><NavLink to='/add' className='adds'><p className='add_inside'>Добавить новый документ</p></NavLink></Route>
               <Route exact path='/add' component={Choose}></Route>
               <Route exact path='/first_layout' component={Choose}></Route>
               <Route exact path='/second_layout' component={Choose}></Route>
            </div>
		     </div>
      )
  }
}

export default Profile;
