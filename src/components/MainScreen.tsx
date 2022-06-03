import React from 'react';
import { NavLink } from 'react-router-dom';
//@ts-ignore
import mainImage from '../../public/images/MainScreen.jpg';




function MainScreen(){
    return(
		<div className='container'>
			<div className='wrap_mainScreen' id='mainScreen'>
				<h1 className='mainScreen_title'>Strategic management</h1>
				<h2 className='mainScreen_subtitle'>The best strategy for tech companies growth built upon an innovative academic approach to intercultural business collaboration</h2>
				<NavLink to='/business_in_switzerland' className='mainScreen_link link4'>Business in Switzerland</NavLink>
				<NavLink to='/business_development' className='mainScreen_link link5'>Business development</NavLink>
				<NavLink to='/emtech_in_davos' className='mainScreen_link link6'>EmTech in Davos</NavLink>
				<NavLink to='/investment_club_start' className='mainScreen_link link7'>Investment Club</NavLink>
				<img src={mainImage} id='mainImage'/>
			</div>
	 	</div>
    )
}

export default MainScreen;
