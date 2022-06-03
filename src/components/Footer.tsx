import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//@ts-ignore
import logo from '../../public/images/Union.svg';
//@ts-ignore
import trigon from '../../public/images/Polygon 1.svg';
//@ts-ignore
import social1 from '../../public/images/akar-icons_linkedin-fill.svg';
//@ts-ignore
import social2 from '../../public/images/ant-design_facebook-filled.svg';
//@ts-ignore
import social3 from '../../public/images/akar-icons_medium-fill.svg';
//@ts-ignore
import social4 from '../../public/images/akar-icons_twitter-fill.svg';
//@ts-ignore
import social5 from '../../public/images/akar-icons_instagram-fill.svg';
//@ts-ignore
import social6 from '../../public/images/akar-icons_telegram-fill.svg';
//@ts-ignore
import social7 from '../../public/images/akar-icons_whatsapp-fill.svg';



class Footer extends Component<any>{

  private capabilities = React.createRef<HTMLAnchorElement>();

  constructor(props: any) {

    super(props)

    this.capabilities = React.createRef();

  }



  render() {
    return(
        <div className='container_footer'>
          <footer className='wrap_footer'>
            <div className='footer_logo'>
              <a href='#mainScreen'><img src={logo} id='footer_img'/></a>
            </div>
                <a href='#' className='footer_link link8' ref={this.capabilities}>Capabilities</a>
                <NavLink to='/business_in_switzerland' className='footer_link link9'>Business in Switzerland</NavLink>
                <NavLink to='/business_development' className='footer_link link10'>Business development</NavLink>
                <NavLink to='/emtech_in_davos' className='footer_link link11'>EmTech in Davos</NavLink>
                <NavLink to='/investment_club_start' className='footer_link link12'>Investment Club</NavLink>

                <a href='#' className='footer_link link13'>About</a>
                <NavLink to='/about' className='footer_link link14'>Team</NavLink>
                <NavLink to='/about' className='footer_link link15'>Address</NavLink>
                <NavLink to='/about' className='footer_link link16'>Contact</NavLink>

                <a href='41792695360' className='footer_link phone2'>+41 79 269 53 60</a>

					 <div className='nav_join2'>
							<div className='menu_join2'>
							<a href='#' className='footer_link link18'>Join us</a>
								<div className='submenu_join2 hideMenu4'>
									<input type="text" className='input_join2' name="useremail" placeholder="Email"/>
									<button className="button_join2" type="submit">Apply</button>
								</div>
							</div>
						</div>
                
					 <div className='nav_language2'>
							<div className='menu_language2'>
								<a href='#' className='footer_link language2'>En</a>
								<div className='submenu_language2 hideMenu4'>
									<a href="#" className='submenu_language_item2'>Ru</a>
									<a href="#" className='submenu_language_item2'>De</a>
									<a href="#" className='submenu_language_item2'>Tk</a>
									<a href="#" className='submenu_language_item2'>Uz</a>
								</div>
							</div>
						</div>

                <a href='#' className='trigon_footer'><div id='footer_trigon'></div></a>

                <div className='footer_contacts'>
                  <a href='#'><img src={social1} className='social_link' id='social1'/></a>
                  <a href='#'><img src={social2} className='social_link' id='social2'/></a>
                  <a href='#'><img src={social3} className='social_link' id='social3'/></a>
                  <a href='#'><img src={social4} className='social_link' id='social4'/></a>
                  <a href='#'><img src={social5} className='social_link' id='social5'/></a>
                  <a href='#'><img src={social6} className='social_link' id='social6'/></a>
                  <a href='#'><img src={social7} className='social_link' id='social7'/></a>
                </div>

          </footer>
        </div>
    )
  }
}

export default Footer;
