import React from 'react';
//@ts-ignore
import mainImage from '../../public/images/MainScreen.jpg';




function MainScreen(){
    return(
		<div className='container'>
			<div className='wrap_mainScreen'>
				<h1 className='mainScreen_title'>Strategic management</h1>
				<h2 className='mainScreen_subtitle'>The best strategy for tech companies growth built upon an innovative academic approach to intercultural business collaboration</h2>
				<a href='#' className='mainScreen_link link4'>Business in Switzerland</a>
				<a href='#' className='mainScreen_link link5'>Business development</a>
				<a href='#' className='mainScreen_link link6'>EmTech in Davos</a>
				<a href='#' className='mainScreen_link link7'>Investment Club</a>
				<img src={mainImage} id='mainImage'/>
			</div>
	 	</div>
    )
}

export default MainScreen;
