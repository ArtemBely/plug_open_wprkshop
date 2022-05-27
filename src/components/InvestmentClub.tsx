import React from 'react';
//@ts-ignore
import background from '../../public/images/Rectangle 123.png';
//@ts-ignore
import logo from '../../public/images/Group 207.svg';



function InvestmentClub(){
    return(
        <div className='container'>
          <div className='wrap_investment'>
			 	<div className='investment_header'>
					 <img src={background} id='background_investment'/>
					 <img src={logo} id='logo_investment'/>
				</div>
				<h3 className='investment_start_title'>Investment club</h3>
				<p className='investment_start_text'>Quantum Leap Strategy is registered as a Self Regulated Organisation according to the Swiss Law and conducts all necessary steps to protect investors, verifying the source of funds and protecting against Money laundering.</p>
				
				<p className='investment_start_text'>The Emerging Technologies Investment Club is a swiss-based platform bringing together most promising startups in the emerging tech and profound investor community. We foster the growth of innovative companies and help to adapt emerging technologies (through mass education and showcasing the implementation possibilities).</p>

				<p className='investment_start_text'>We connect investors to seed and early-stage startups specializing in emerging technologies. As a strong community we organize the deal flow, matchmaking of startups and investors online as well as at pitching events.</p>

				<p className='investment_start_text'>QL Strategy AG hosts the Emerging Technologies Investment Meeting annually in Davos. The conference is supported and recommended by leading industry experts as the TOP 5 events during WEF week in Davos.</p>
				<div className='investment_information'>
					<div className='information_startups'>
						<p className='information_startups_title'>For startups</p>
						<p className='information_startups_text'>We help startups to realize their potential.</p>
						
						<p className='information_startups_text'>We provide access the profound investor network, pitch opportunities</p>
						
						<p className='information_startups_text'>Mentoring and guidance from experienced experts from various industries contributing and giving valuable insights</p>
						
						<p className='information_startups_text2'>Why Switzerland? Liberal governance supporting innovation and entrepreneurship, access to the capital.</p>
					</div>
					<div className='information_investors'>
						<p className='information_investors_title'>For investors</p>
						<p className='information_investors_text'>Perform selection process</p>

						<p className='information_investors_text'>We analyze and perform due diligences and structure and negotiate the investment terms before presenting investment opportunities to the members of the Investors Club.</p>
					</div>
				</div>
				<a href="#" className='investment_start_btn1'>Investor log in</a>
				<a href="#" className='investment_start_btn2'>Register</a>
				<p className='investment_text'>Please fill in the registration/application form and our manager will get back to you</p>
				<div className='investment_registration'>
					<form action="#" method='post'>
						<label htmlFor="checkbox" className='start_checkbox'>I`m start up</label>
							<div className='investment_box'>
								<input type="checkbox" name="start" className='registration_check' id='checkbox'/>
								<label htmlFor="checkbox" className="checkbox_label"></label>
							</div>
						<label htmlFor="checkbox" className='investor_checkbox'>I`m investor</label> 
						<input type="text" name='username' placeholder='Your name' className='registration_name'/>
						<input type="text" name='usercompany' placeholder='Your company' className='registration_company'/>
						<input type="tel" name='userphone' placeholder='+49 _ _ _  _ _ _ _  _ _ _ _' className='registration_phone'/>
						<input type="text" name='usermail' placeholder='Email' className='registration_mail'/>
						<input type="text" name='userinfo' placeholder='Short company`s description' className='registration_info'/>
						<button type='submit' className='registration_button'>Apply</button>
					</form>
					<p className='investment_registration_text'>By filling out this form you accept our <a href='#'>privacy policy</a>.</p>
					<p className='investment_registration_text2'>We analyze and perform due diligences and structure and negotiate the investment terms before presenting investment opportunities to the members of the Investors Club.</p>
				</div>
				<div className='wrap_investment_investor'>
				 <h3 className='investment_investor_title'>Investment club</h3>
				 <p className='investment_investor_text'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
				 <form action="#" method='post'>
				 	<label htmlFor="checkbox2" className='start_checkbox_2'>I`m start up</label>
						<div className='investor_box'>
							<input type="checkbox" name="start" className='registration_check_2' id='checkbox2'/>
							<label htmlFor="checkbox2" className="checkbox_label_2"></label>
						</div>
					<label htmlFor="checkbox2" className='investor_checkbox_2'>I`m investor</label> 
					<input type="text" name='username' placeholder='Your name' className='investor_name'/>
					<input type="text" name='usermail' placeholder='Email' className='investor_mail'/>
					<input type="text" name='userinfo' placeholder='Preferred field' className='investor_info'/>
					<button type='submit' className='investor_button'>Apply</button>
				 </form>
				 <p className='investor_registration_text'>By filling out this form you accept our <a href='#'>privacy policy</a>.</p>
			   </div>
			 </div>

        </div>
    )
  }


export default InvestmentClub;
