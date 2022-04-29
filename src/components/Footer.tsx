import React from 'react';
import logo from '../../public/images/Union.svg';
import trigon from '../../public/images/Polygon 1.svg';
import social1 from '../../public/images/akar-icons_linkedin-fill.svg';
import social2 from '../../public/images/ant-design_facebook-filled.svg';
import social3 from '../../public/images/akar-icons_medium-fill.svg';
import social4 from '../../public/images/akar-icons_twitter-fill.svg';
import social5 from '../../public/images/akar-icons_instagram-fill.svg';
import social6 from '../../public/images/akar-icons_telegram-fill.svg';
import social7 from '../../public/images/akar-icons_whatsapp-fill.svg';



function Header(){
    return(
		<div className='container'>
			<footer className='wrap_footer'>
				<div className='footer_logo'>
					<img src={logo} id='footer_img'/>
				</div>
				<a href='#' className='footer_link link8'>Capabilities</a>
				<a href='#' className='footer_link link9'>Business in Switzerland</a>
				<a href='#' className='footer_link link10'>Business development</a>
				<a href='#' className='footer_link link11'>EmTech in Davos</a>
				<a href='#' className='footer_link link12'>Investment Club</a>
				
				<a href='#' className='footer_link link13'>About</a>
				<a href='#' className='footer_link link14'>Teamb</a>
				<a href='#' className='footer_link link15'>Address</a>
				<a href='#' className='footer_link link16'>Contact</a>

				<p className='footer_link phone2'>+41 79 269 53 60</p>
				<a href='#' className='footer_link link18'>Join us</a>
				<a href='#' className='footer_link language2'>En</a>

				<img src={trigon} id='footer_trigon'/>

				<div className='footer_contacts'>
					<img src={social1} id='social1'/>
					<img src={social2} id='social2'/>
					<img src={social3} id='social3'/>
					<img src={social4} id='social4'/>
					<img src={social5} id='social5'/>
					<img src={social6} id='social6'/>
					<img src={social7} id='social7'/>
				</div>
				
			</footer>
	 	</div>
    )
}

export default Header;
