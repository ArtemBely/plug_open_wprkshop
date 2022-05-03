import React, { Component } from 'react';
//@ts-ignore
import logo from '../../public/images/Union.svg';


class Header extends Component<{}, {}>{

  private sub = React.createRef<HTMLDivElement>();

  constructor(props: any) {

    super(props)

    this.sub = React.createRef();

  }
/*  --> обозначения функций с привязкой ref (id) элементов
showSub = (): void => {
		this.sub?.current?.classList.add("hideMenu");
}

hideSub = (): void => {
    this.sub?.current?.classList.remove("hideMenu");
}
*/
render() {
			return (
				<div className='wrap_header'>
					<div className='header'>
						<div className='red_logo'>
							<img src={logo} id='logo' />
						</div>
						<div id='nav'>
							<div className='menu_item'>
								<a href='#' className='header_link link1'>Capabilities</a>
								<div className="submenu hideMenu" ref={this.sub}>
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

}

export default Header;
