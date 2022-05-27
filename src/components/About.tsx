import React from 'react';
//@ts-ignore
import background from '../../public/images/Group 162.png';
//@ts-ignore
import logo from '../../public/images/Group 207.svg';
//@ts-ignore
import icon1 from '../../public/images/Business.svg';
//@ts-ignore
import icon2 from '../../public/images/target2.svg';
//@ts-ignore
import icon3 from '../../public/images/earth.svg';
//@ts-ignore
import icon4 from '../../public/images/target.svg';
//@ts-ignore
import icon5 from '../../public/images/dashboard.svg';
//@ts-ignore
import person_1 from '../../public/images/20200621_230059 2.jpg';
//@ts-ignore
import person_2 from '../../public/images/image 21.jpg';
//@ts-ignore
import person_3 from '../../public/images/image 27.jpg';
//@ts-ignore
import person_4 from '../../public/images/image 19.jpg';
//@ts-ignore
import person_5 from '../../public/images/image 20.jpg';
//@ts-ignore
import person_6 from '../../public/images/Rectangle 110.jpg';
//@ts-ignore
import person_6 from '../../public/images/Rectangle 110.jpg';
//@ts-ignore
import map from '../../public/images/XMLID 3.png';
//@ts-ignore
import location from '../../public/images/Rectangle 117.svg';








function About(){
    return(
        <div className='container'>
          <div className='wrap_about'>
			 	<div className='about_header'>
					 <img src={background} id='background_about'/>
					 <img src={logo} id='logo_about'/>
					 <div className='about_header_block'>
						 <p className='header_block_title'>Quantum Leap Strategy</p>
						 <p className='header_block_subtitle'>The best strategy for tech companies growth built upon an innovative academic approach to intercultural business collaboration.</p>
						 <a href="#" className='header_block_link1'>Team</a>
						 <a href="#" className='header_block_link2'>Address</a>
						 <a href="#" className='header_block_link3'>Contact</a>
					 </div>
				</div>
				<h3 className='about_title'>About the company</h3>
				<p className='about_text'>Quantum Leap Strategy AG is a Swiss Financial and Management Advisory firm. The company is focused on positioning and new market entrance, using an academic approach to intercultural business collaboration and experience in emerging technologies presentation. QL Strategy is registered as a Self Regulated Organisation according to the Swiss Law and conducts all necessary steps to protect investors, verifying the source of funds and protecting against Money laundering. QL Strategy operates globally with its headquarters based in Switzerland. Quantum Leap Strategy AG hosts the Emerging Technologies Investment Meeting annually in Davos. The conference is supported and recommended by leading industry experts as `The TOP 5 events during WEF week in Davos.</p>
				<div className='about_information'>
					<div className='about_information_block1'>
						<p className='information_block_title'>Administrative Information:</p>
						<p className='information_block_text'>Quantum Leap Strategy AG</p>
						<p className='information_block_text'>SRO Licensed, monitored by SRO-TREUHAND SUISSE, Bern</p>
						<p className='information_block_text'>Registration: CHE-105.375.399</p>
						<p className='information_block_text'>Address: Gewerbestrasse 7, 6330, Cham, Switzerland</p>
						<p className='information_block_text'>Website: QLStrategy.ch	</p>
						<p className='information_block_text'>E-mail: AG@qlstrategy.ch</p>
					</div>
					<div className='about_information_block2'>
						<p className='information_block_title'>Management:</p>
						<p className='information_block_text'>Alena Yudina – Managing Director</p>
						<p className='information_block_text'>E-mail: a.yudina@qlstrategy.ch</p>
						<p className='information_block_text'>Mobile: +41 79 269 53 60</p>
						<p className='information_block_text'>Location: Zurich, Switzerland</p>
					</div>
					<div className='about_information_block3'>
						<p className='information_block_title'>Bank details: </p>
						<p className='information_block_text'>Bank name: Post Finance</p>
						<p className='information_block_text'>Account-Nr .: 15-149265-6</p>
						<p className='information_block_text'>IBAN: CH73 0900 0000 1514 9265 6</p>
						<p className='information_block_text'>BIC: POFICHBEXXX</p>
					</div>
				</div>

				<div className='about_benefits'>
					
						<div className='benefits1_row1'>
							<div className='benefits_icon'><img src={icon1} id='about_icon'/></div>
							<p className='about_benefets_text'>Entrepreneurial spirit, results-oriented, flexible and proactive</p>
						</div>
						<div className='benefits2_row1'>
							<div className='benefits_icon'><img src={icon2} id='about_icon'/></div>
							<p className='about_benefets_text'>Clear identification with customer goals, high initiative and positive thinking</p>
						</div>
						<div className='benefits3_row1'>
							<div className='benefits_icon'><img src={icon3} id='about_icon'/></div>
							<p className='about_benefets_text'>Flexibility to travel around the world for the project`s success</p>
						</div>
					
					
						<div className='benefits1_row2'>
							<div className='benefits_icon'><img src={icon4} id='about_icon'/></div>
							<p className='about_benefets_text'>Collaborative spirit, conflict solving approach</p>
						</div>
						<div className='benefits2_row2'>
							<div className='benefits_icon'><img src={icon5} id='about_icon'/></div>
							<p className='about_benefets_text'>Lean project management experienced professionals</p>
						</div>
					
				</div>

				<p className='about_team_title'>Team</p>
				<div className='about_team'>
					<div className='about_person1'>
						<div className='person_photo'>
							<img src={person_1} id='person_img'/>
						</div>
						<p className='person_name'>Alena Yudina</p>
						<p className='person_position'>Managing director</p>
						<p className='person_text'>Alena is specialized in building strategic partnerships, business positioning for new markets and brand awareness. Having 15 years professional experience in governmental and business structures, Alena has always been involved in event management, be it in international conferences or local charity. Implying intercultural collaboration studies into real life, she could see how difficult it is for businesses to grow in a new environment. The idea to help tech companies and investment funds to grow and open up new horizons, brought to creating the EmTech Investment Meetings, which was recommended among top 5 events during the Davos Week. 
						<br/>
						<br/>
						MA in International Relations. Certified Business Analyst. CFA Candidate (Dec 2020).
						<br/>
						<br/>
						In progress PhD on “Intercultural business collaboration”
						<br/>
						<br/>
						Director of the Charity Foundation "Country of Talents".</p>
						<p className='person_info_1'>E-mail: a.yudina@qlstrategy.ch		</p>
						<p className='person_info'>WhatsApp: +41 79 2695360 	</p>
						<p className='person_info'>Telegram: @aljona_yudina </p>
						<p className='person_info'>WeChat: Aljona_Yudina</p>
					</div>
					<div className='about_person2'>
						<div className='person_photo'>
							<img src={person_2} id='person_img'/>
						</div>
						<p className='person_name'>Oxana Herzog</p>
						<p className='person_position'>COO</p>
						<p className='person_text'>Oxana has more than 10 years project management and management consulting experience in an international business, and  brings her operation excellence skills, business development capabilities and strategy development expertise. Oxana developed her cross functional skills in companies like PUMA AG, working for the EMEA region in Switzerland,  and is a certified trainer on communication and coaching from PUMA University, Herzoganaurach, DE.  She has strong leads in the mechanical engineering industry, manufacturing, quality control and industrial events management brought from working experience in metrology field. Oxana is Project Manager specialist, certified by KV Business School Zurich, and has Master Degree in International Economy from Saint-Petersburg State University. </p>
						<p className='person_info_1'>E-mail: o.herzog@qlstrategy.ch		</p>
						<p className='person_info'>WhatsApp: +41 76 4585194</p>
					</div>
					<div className='about_person3'>
						<div className='person_photo'>
							<img src={person_3} id='person_img'/>
						</div>
						<p className='person_name'>Oxana Herzog</p>
						<p className='person_position'>COO</p>
						<p className='person_text'>Oxana has more than 10 years project management and management consulting experience in an international business, and  brings her operation excellence skills, business development capabilities and strategy development expertise. Oxana developed her cross functional skills in companies like PUMA AG, working for the EMEA region in Switzerland,  and is a certified trainer on communication and coaching from PUMA University, Herzoganaurach, DE.  She has strong leads in the mechanical engineering industry, manufacturing, quality control and industrial events management brought from working experience in metrology field. Oxana is Project Manager specialist, certified by KV Business School Zurich, and has Master Degree in International Economy from Saint-Petersburg State University. </p>
						<p className='person_info_1'>E-mail: o.herzog@qlstrategy.ch		</p>
						<p className='person_info'>WhatsApp: +41 76 4585194	</p>
					</div>
					<div className='about_person4'>
						<div className='person_photo'>
							<img src={person_4} id='person_img'/>
						</div>
						<p className='person_name'>Darya Kharchanka</p>
						<p className='person_position'>Head of Sales</p>
						<p className='person_text'>Darya is a marketing and sales professional with over 5 years of experience in the technology sector, specialising in marketing automation and growth-hacking techniques.
						<br/>
						<br/>
						She obtained an MSc in BA, majoring in Entrepreneurship from the University of Applied Sciences and Arts of Western Switzerland.</p>
						<p className='person_info_1'>E-mail: </p>
						<p className='person_info'>WhatsApp</p>
						<p className='person_info'>Telegram: </p>
						<p className='person_info'>WeChat: </p>
					</div>
					<div className='about_person5'>
						<div className='person_photo'>
							<img src={person_5} id='person_img'/>
						</div>
						<p className='person_name'>Natalia Pogonchenko</p>
						<p className='person_position'>Business Development</p>
						<p className='person_text'>Natalia is a business development specialist of fintech projects. Many years curated fintech projects for the EmTech Investment Meeting, organized roadshows, meetings as well as conducted financial research.
						<br/>
						<br/>
						Studied corporate finance at University of Zurich and Vienna University of economics and business.</p>
						<p className='person_info_1'>E-mail: natalia@qlstrategy.ch		</p>
						<p className='person_info'>WhatsApp: 	+41795949002		</p>
						<p className='person_info'>Telegram: @amay_nataly	</p>
						<p className='person_info'>WeChat: Amay_Nataly	</p>
					</div>
					<div className='about_person6'>
						<div className='person_photo'>
							<img src={person_6} id='person_img'/>
						</div>
						<p className='person_name'>Olga Stupakova</p>
						<p className='person_position'>Digital Director</p>
						<p className='person_text'>Olga is a digital marketer with over 4 years experience with SEP and big companies: beauty, HoReCa, medicine, events, technology sector, banks, also consulting celebrities and influencers. Specializing on product funnels and creative marketing, always in search for conversions growth options. Olga successfully implemented over 70 digital-strategies with average ROMI 300%
						<br/>
						<br/>
						Studied international economy (Master), Social Media Marketing, marketing and sales in the social media at Open European Academy of Economics & Politics in Prague</p>
						<p className='person_info_1'>E-mail: oastupakova@icloud.com </p>
						<p className='person_info'>WhatsApp: +79163801939 		</p>
						<p className='person_info'>Telegram: @olga_alekseevna	</p>
						<p className='person_info'></p>
					</div>
				</div>
				<a href="#" className='person_button'>Open full text</a>

				<div className='about_partners_block'>
					<p className='partners_block_title'>Headquarters and Partners</p>
					<p className='partners_country' id='switzerland'>Switzerland</p>
					<p className='partners_country' id='bahrain'>Bahrain</p>
					<p className='partners_country' id='india'>India</p>
					<p className='partners_country' id='russia'>Russia</p>
					<div className='partners_block_map'>
						<img src={map} id='map_img'/>
						<div className='map_location_1'>
							<img src={location} id='location_img'/>
						</div>
						<div className='map_location_2'>
							<img src={location} id='location_img'/>
						</div>
						<div className='map_location_3'>
							<img src={location} id='location_img'/>
						</div>
						<div className='map_location_4'>
							<img src={location} id='location_img'/>
						</div>
					</div>
				</div>



			 </div>
        </div>
    )
  }


export default About;
