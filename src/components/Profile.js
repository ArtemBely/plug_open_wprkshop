import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from '../../public/images/Ellipse 7.svg';
import burger from '../../public/images/Group 48.svg';

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
				<NavLink to='#' className='menu' id='search' activeClassName='active_header'>Поиск</NavLink>
			</div>
		</div>
      )
  }
}

export default Profile;
