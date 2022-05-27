import React from 'react';
//@ts-ignore
import growImage from '../../public/images/Group 131.png';
//@ts-ignore
import growImage2 from '../../public/images/one pager quantum leap strategy 1.png';
//@ts-ignore
import mountains from '../../public/images/mountains.png';



function SettleGrow(){
    return(
		<div className='container'>
			<div className='wrap_settleGrow'>
				<div className='mountains'>
					<img src={mountains} id='mountains_img'/>
				</div>
				<h3 className='settleGrow_title2'>Settle, grow and expand</h3>
				<div className='settleGrow_img'>
					<img src={growImage} id='grow_img'/>
					<a href='#' className='grow_download'>Download One Pager</a>
				</div>
				<div className='settleGrow_phone'>
					<div className='settleGrow_img2'>
						<img src={growImage2} id='grow_img2'/>
					</div>
					<p className='settleGrow_phone_text'>This document is dipiscing elit elementum nibh lacus amet magna commodo et facilisis. Tellus tellus arcu, nulla integer id.</p>
				</div>
				<div className='settleGrow_block'>
					<h3 className='settleGrow_title'>Settle, grow and expand</h3>
					<p className='settleGrow_item grow_item1'>Vision</p>
					<p className='settleGrow_text grow_text1'>Bring most needed emerging technologies (EmTech) to the daily life of   businesses and people with understanding of its value and benefits.</p>
					<p className='settleGrow_item grow_item2'>Mission</p>
					<p className='settleGrow_text grow_text2'>It's very difficult to understand a new culture and, of course, it's even more difficult to understand a new technology. We bring science of imagology to bridge this gap and establish a better understanding of the most innovative ideas.</p>
					<p className='settleGrow_item grow_item3'>Goals</p>
					<p className='settleGrow_text grow_text3'>Being in the heart of Europe, we would like to use Swiss support of innovation and entrepreneurship for the world's good.  But opening and developing businesses in Switzerland can be just the first step. Bringing EmTech further to other countries, we would build positioning upon advanced social science and local partnerships. We believe that education and collaboration lead to tech adoption. That is why we host annual EmTech conferences in Davos and founded the Investment Club. </p>
				</div>
			</div>
	 	</div>
    )
}

export default SettleGrow;
