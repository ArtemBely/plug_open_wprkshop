import React from 'react';
//@ts-ignore
import background from '../../public/images/image 11.png';
//@ts-ignore
import logo from '../../public/images/Group 207.svg';
//@ts-ignore
import blog1 from '../../public/images/shutterstock_632518478 2.png';
//@ts-ignore
import blog2 from '../../public/images/Rectangle 169.png';
//@ts-ignore
import blog3 from '../../public/images/Rectangle 177.png';
//@ts-ignore
import blog4 from '../../public/images/Rectangle 174.png';
//@ts-ignore
import blog5 from '../../public/images/Rectangle 176.png';
//@ts-ignore
import blog6 from '../../public/images/Rectangle 175.png';





function Blog(){
    return(
        <div className='container'>
          <div className='wrap_blog'>
				<div className='blog_header'>
					<img src={background} id='background_blog'/>
					<img src={logo} id='logo_blog'/>
				</div>
				<h3 className='blog_title'>Blog</h3>
				<div className='wrap_new'>
					<a href="#" className='blog_new'>Новое</a>
					<a href="#" className='blog_new'>Новое</a>
					<a href="#" className='blog_new'>Новое</a>
					<a href="#" className='blog_new'>Новое</a>
					<a href="#" className='blog_new'>Новое</a>
					<a href="#" className='blog_new'>Новое</a>
				</div>
				<div className='blog_grid'>
					<div className='blog_1'>
						<div className='blog_img'>
							<img src={blog1} id='image_blog'/>
							<div className='image_blog_new'>Новое</div>
						</div>
						<p className='blog_name'>Veniam consequat sunt nostrud amet consequat sunt</p>
						<p className='blog_date'>9 марта 2020</p>
					</div>

					<div className='blog_2'>
						<div className='blog_img'>
							<img src={blog2} id='image_blog'/>
						</div>
						<p className='blog_name'>Amet minim mollit non deserunt ullamco est sit aliqua</p>
						<p className='blog_date'>26 февраля 2020</p>
					</div>

					<div className='blog_3'>
						<div className='blog_img'>
							<img src={blog3} id='image_blog'/>
						</div>
						<p className='blog_name'>Amet sint. Velit officia consequat duis enim velit mollit</p>
						<p className='blog_date'>26 февраля 2020</p>
					</div>

					<div className='blog_4'>
						<div className='blog_img'>
							<img src={blog4} id='image_blog'/>
						</div>
						<p className='blog_name'>Amet minim mollit non deserunt ullamco est sit aliqua dolor </p>
						<p className='blog_date'>20 февраля 2020</p>
					</div>

					<div className='blog_5'>
						<div className='blog_img'>
							<img src={blog5} id='image_blog'/>
						</div>
						<p className='blog_name'>Amet minim mollit non deserunt ullamco est sit aliqua dolor </p>
						<p className='blog_date'>10 февраля 2020</p>
					</div>

					<div className='blog_6'>
						<div className='blog_img'>
							<img src={blog6} id='image_blog'/>
						</div>
						<p className='blog_name'>Amet minim mollit non deserunt ullamco est sit aliqua dolor </p>
						<p className='blog_date'>10 февраля 2020</p>
					</div>
				</div>

			 </div>
        </div>
    )
  }


export default Blog;
