import React from 'react';
import { NavLink } from 'react-router-dom';
import group from '../../public/images/Mask Group.svg';
import group2 from '../../public/images/Mask Group2.svg';
import group3 from '../../public/images/Mask Group3.svg';
import background from '../../public/images/background.png';

class Header extends React.Component{
  render() {
    return(
      <div className='wrap_header'>
        <div className='container'>
            <h1 className='header_title'>Why people choose us</h1>
				<h2 className='header_subtitle'>Get the best of digital and traditional worlds by accessing state of the art infrastructure and tailor-made services.</h2>
				<div className='header_text text1'>Fast and fully digital onboarding</div>
				<div className='header_text text2'>Swiss-based & licensed counterparty</div>
				<div className='header_block'>
					<div className='header_text text3'>Institutional-grade security & full asset control through world leading providers</div>
					<div className='block_img1'><img src={group} /></div>
					<div className='block_img2'><img src={group2} /></div>
					<div className='block_img3'><img src={group3} /></div>
					<div className='header_block_rct1'></div>
					<div className='header_block_rct2'></div>
				</div>
				<div className='header_text text4'>Best prices and fees through aggregated liquidity
				</div>
				<div className='header_text text5'>Deposits in fiat and digital assets</div>
				<div className='header_text text6'>Crypto & traditional market expertise</div>
				<div className='header_text text7'>Experienced team with established track record and combined experience of 100 years across digital and traditional classes</div>
				<div className='gun_line'>
					<img src={background} id='gun'/>
				</div>

        </div>
      </div>
    )
  }
}

export default Header;
