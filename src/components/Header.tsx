import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
							<a href='#mainScreen'><img src={logo} id='logo' /></a>
						</div>
						<div id='nav'>
							<div className='menu_item'>
								<a href='#' className='header_link link1'>Capabilities</a>
								<div className="submenu hideMenu" ref={this.sub}>
									<div id='nav_2'>
										<div className='menu_item2'>
											<NavLink to='/business_in_switzerland' className="submenu_item business_in_sw">Business in Switzerland</NavLink>
											<div className='submenu_2 hideMenu2'>
												<NavLink to='/swiss_companies_setup' className='submenu_item'>Swiss Companies Setup</NavLink>
												<NavLink to='/account_in_sw' className='submenu_item'>Bank account in Switzerland</NavLink>
												<NavLink to='/aml_control' className='submenu_item'>AML control</NavLink>
												<NavLink to='/taxes' className='submenu_item submenu_tax'>Tax and Legal</NavLink>
											</div>
										</div>
									</div>
									
									<NavLink to='/business_development' className="submenu_item">Business development</NavLink>
									<NavLink to='/emtech_in_davos' className="submenu_item">EmTech in Davos</NavLink>
									<NavLink to='/investment_club_start' className="submenu_item">Investment Club</NavLink>
								</div>
							</div>
						</div>
						<NavLink to='/about' className='header_link link2'>About</NavLink>
						<a href='41792695360' className='header_link phone'>+41 79 269 53 60</a>

						<div className='nav_join'>
							<div className='menu_join'>
								<a href='#' className='header_link link3'>Join us</a>
								<div className='submenu_join hideMenu3'>
									<input type="text" className='input_join' name="useremail" placeholder="Email"/>
									<button className="button_join" type="submit">Apply</button>
								</div>
							</div>
						</div>
						
						<div className='nav_language'>
							<div className='menu_language'>
								<a href='#' className='header_link language'>En</a>
								<div className='submenu_language hideMenu4'>
									<a href="#" className='submenu_language_item'>Ru</a>
									<a href="#" className='submenu_language_item'>De</a>
									<a href="#" className='submenu_language_item'>Tk</a>
									<a href="#" className='submenu_language_item'>Uz</a>
								</div>
							</div>
						</div>


					</div>
				</div>
			)
		}

}

export default Header;
