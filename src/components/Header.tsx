import React from 'react';
import logo from '../../public/images/Union.svg';




/*const elements = document.getElementsByClassName('menu_item');
	for (i=0; i<elements.length; i++) {
		elements[i].addEventListener('mouseenter', showSub, false);
		elements[i].addEventListener('mouseleave', hideSub, false);
}
 function showSub() {
	 if(this.children.length>1) {
		this.children[1].style.height = 'auto';
		this.children[1].style.opacity = '1';
		this.children[1].style.overflow = 'visible';
	 } else {
		 return false; 
	 }
 }
 function hideSub() {
	if(this.children.length>1) {
	  this.children[1].style.height = '0';
	  this.children[1].style.opacity = '0';
	  this.children[1].style.overflow = 'hidden';
	} else {
		return false; 
	}
}*/

function Header() {
	return (
		<div className='wrap_header'>
			<div className='header'>
				<div className='red_logo'>
					<img src={logo} id='logo' />
				</div>
				<div id='nav'>
					<div className='menu_item'>
						<a href='#' className='header_link link1'>Capabilities</a>
						<div className="submenu">
							<a href='#' className="submenu_item">Business in Switzerland</a>
							<a href='#' className="submenu_item">Business development</a>
							<a href='#' className="submenu_item">EmTech in Davos</a>
							<a href='#' className="submenu_item">Investment Club</a>
						</div>
					</div>
				</div>

				<a href='#' className='header_link link2'>About</a>
				<a href='41792695360' className='header_link phone'>+41 79 269 53 60</a>
				<a href='#' className='header_link link3'>Join us</a>
				<a href='#' className='header_link language'>En</a>
			</div>
		</div>
	)
}

export default Header;
