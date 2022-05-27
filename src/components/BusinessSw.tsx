import React from 'react';
//@ts-ignore
import background from '../../public/images/Rectangle 130.png';
//@ts-ignore
import logo from '../../public/images/Group 207.svg';
//@ts-ignore
import timeline from '../../public/images/timeline5.png';
//@ts-ignore
import timeline2 from '../../public/images/Group 263.png';
//@ts-ignore
import timeline3 from '../../public/images/Group 261.png';






function BusinessSw(){
    return(
        <div className='container'>
          <div className='wrap_businessSw'>
			 	<div className='businessSw_header'>
					 <img src={background} id='background_businessSw'/>
					 <img src={logo} id='logo_businessSw'/>
				</div>
				<div className='businessSw_information'>
					<p className='businessSw_text2'>Make Switzerland a new home for your business.</p>
					<h3 className='businessSw_title'>Business in Switzerland</h3>
					<p className='businessSw_subtitle'>Make Switzerland a new home for your business</p>
					<p className='businessSw_text'>Reputation of Switzerland speaks for itself. Besides being a traditional financial centre, Switzerland is one of the most supportive countries for fintech, innovation and startup initiatives. Investors, Funds and Family offices are choosing Switzerland as one of the strongest financial systems with flexible cantonal tax policies.</p>
					<p className='businessSw_text'>If you have an idea, we can help you with strategic and administrative implementation. Establishing your business in Switzerland is easier with an experienced advisor. In some cases your personal attendance will not be necessary.</p>
					<a href="#" className='businessSw_information_btn1'>Free Consultation</a>
					<a href="#" className='businessSw_information_btn2'>Online Incorporation</a>
					<a href="#" className='businessSw_information_btn3'>Cost estimator</a>
				</div>
				<div className='businessSw_info_block'>
					<div className='info_block_1'>
						<a href='#' className='info_block_title'>Swiss Company <span>Setup</span></a>
						<p className='info_block_text'>LLC ( GMbH) and PLC (AG)</p>
						<p className='info_block_text'>Foundation</p>
						<p className='info_block_text'>Resident Director and Address</p>
						<p className='info_block_text'>Business and employees relocation</p>
						<a href="#" className='info_block_btn1'>Incorporate →</a>
					</div>
					<div className='info_block_2'>
						<a href='#' className='info_block_title'>Bank accounts</a>
						<p className='info_block_text'>Corporate bank account</p>
						<p className='info_block_text'>Personal bank account</p>
						<p className='info_block_text'>Digital finance</p>
						<p className='info_block_text'>Crypto friendly financial structures</p>
						<a href="#" className='info_block_btn2'>Open →</a>
					</div>
					<div className='info_block_3'>
						<a href='#' className='info_block_title'>AML control</a>
						<p className='info_block_text'>Control and risk assessment</p>
						<p className='info_block_text'>AML officer</p>
						<p className='info_block_text'>Clients profiles management</p>
						<p className='info_block_text'>SRO license</p>
						<a href="#" className='info_block_btn3'>Apply →</a>
					</div>
					<div className='info_block_4'>
						<a href='#' className='info_block_title'>Tax and Legal</a>
						<p className='info_block_text'>International tax solutions</p>
						<p className='info_block_text'>Legal assistance</p>
						<p className='info_block_text'>Accounting support</p>
						<p className='info_block_text'>Compliance check</p>
						<a href="#" className='info_block_btn4'>Request →</a>
					</div>
				</div>
				<div className='businessSw_timeline'>
					<img src={timeline} id='businessSw_timeline_img'/>
				</div>
				<div className='businessSw_timeline2'>
					<img src={timeline2} id='businessSw_timeline_img2'/>
				</div>
				<div className='businessSw_timeline3'>
					<img src={timeline3} id='businessSw_timeline_img3'/>
				</div>

				<p className='businessSw_item'>Packages</p>
				<div className='businessSw_packages'>
					<div className='businessSw_first_row'>
						<div className='first_row_column2'>
							<p className='businessSw_packages_rates'>Basic</p>
							<a  href='#' className='businessSw_packages_button1'>Buy for <span className='span_button'>500 CHF</span></a>
						</div>
						<div className='first_row_column3'>
							<p className='businessSw_packages_rates'>Startup</p>
							<a  href='#' className='businessSw_packages_button2'>Buy for <span className='span_button'>1500 CHF</span></a>
						</div>
						<div className='first_row_column4'>
							<p className='businessSw_packages_rates'>Premium</p>
							<a  href='#' className='businessSw_packages_button3'>Buy for <span className='span_button'>5000 CHF</span></a>
						</div>
					</div>

					<div className='row_grey packages_row2'>
						<div className='column_1'>
							<p className='packages_name'>Company Name and Purpose Formulation</p>
						</div>
						<div className='column_2'>
							<div className='packages_plus'>+</div>
						</div>
						<div className='column_3'>
							<div className='packages_plus'>+</div>
						</div>
						<div className='column_4'>
							<div className='packages_plus'>+</div>
						</div>
					</div>

					<div className='row_white packages_row3'>
						<div className='column_1'>
							<p className='packages_name'>Incorporation Documents preparation</p>
						</div>
						<div className='column_2'>
							<div className='packages_plus'>+</div>
						</div>
						<div className='column_3'>
							<div className='packages_plus'>+</div>
						</div>
						<div className='column_4'>
							<div className='packages_plus'>+</div>
						</div>
					</div>

					<div className='row_grey packages_row4'>
						<div className='column_1'>
							<p className='packages_name'>Capital Contribution Management</p>
						</div>
						<div className='column_2'>
							<div className='packages_plus'>+</div>
						</div>
						<div className='column_3'>
							<div className='packages_plus'>+</div>
						</div>
						<div className='column_4'>
							<div className='packages_plus'>+</div>
						</div>
					</div>

					<div className='row_white packages_row5'>
						<div className='column_1'>
							<p className='packages_name'>Business operation in Switzerland Checklist</p>
						</div>
						<div className='column_2'>
							<div className='packages_plus'>+</div>
						</div>
						<div className='column_3'>
							<div className='packages_plus'>+</div>
						</div>
						<div className='column_4'>
							<div className='packages_plus'>+</div>
						</div>
					</div>

					<div className='row_grey packages_row6'>
						<div className='column_1'>
							<p className='packages_name'>Mail forwarding for 1 year</p>
						</div>
						<div className='column_2'>
							<div className='packages_minus'>-</div>
						</div>
						<div className='column_3'>
							<div className='packages_plus'>+</div>
						</div>
						<div className='column_4'>
							<div className='packages_plus'>+</div>
						</div>
					</div>

					<div className='row_white packages_row7'>
						<div className='column_1'>
							<p className='packages_name'>Notary fee</p>
						</div>
						<div className='column_2'>
							<div className='packages_minus'>-</div>
						</div>
						<div className='column_3'>
							<div className='packages_plus'>+</div>
						</div>
						<div className='column_4'>
							<div className='packages_plus'>+</div>
						</div>
					</div>

					<div className='row_grey packages_row8'>
						<div className='column_1'>
							<p className='packages_name'>Domiciliation address for 1 year</p>
						</div>
						<div className='column_2'>
							<div className='packages_minus'>-</div>
						</div>
						<div className='column_3'>
							<div className='packages_plus'>+</div>
						</div>
						<div className='column_4'>
							<div className='packages_plus'>+</div>
						</div>
					</div>

					<div className='row_white packages_row9'>
						<div className='column_1'>
							<p className='packages_name'>VAT registration</p>
						</div>
						<div className='column_2'>
							<div className='packages_minus'>-</div>
						</div>
						<div className='column_3'>
							<div className='packages_minus'>-</div>
						</div>
						<div className='column_4'>
							<div className='packages_plus'>+</div>
						</div>
					</div>

					<div className='row_grey packages_row10'>
						<div className='column_1'>
							<p className='packages_name'>Employee registration</p>
						</div>
						<div className='column_2'>
							<div className='packages_minus'>-</div>
						</div>
						<div className='column_3'>
							<div className='packages_minus'>-</div>
						</div>
						<div className='column_4'>
							<div className='packages_plus'>+</div>
						</div>
					</div>

					<div className='row_white packages_row11'>
						<div className='column_1'>
							<p className='packages_name'>Preparation of annual tax return</p>
						</div>
						<div className='column_2'>
							<div className='packages_minus'>-</div>
						</div>
						<div className='column_3'>
							<div className='packages_minus'>-</div>
						</div>
						<div className='column_4'>
							<div className='packages_plus'>+</div>
						</div>
					</div>

					<div className='row_grey packages_row12'>
						<div className='column_1'>
							<p className='packages_name'>Commercial Register fee</p>
						</div>
						<div className='column_2'>
							<div className='packages_minus'>-</div>
						</div>
						<div className='column_3'>
							<div className='packages_minus'>-</div>
						</div>
						<div className='column_4'>
							<div className='packages_plus'>+</div>
						</div>
					</div>

					<div className='row_white packages_row13'>
						<div className='column_1'>
							<p className='packages_name'>Employee contract</p>
						</div>
						<div className='column_2'>
							<div className='packages_minus'>-</div>
						</div>
						<div className='column_3'>
							<div className='packages_minus'>-</div>
						</div>
						<div className='column_4'>
							<div className='packages_plus'>+</div>
						</div>
					</div>

					<div className='row_grey packages_row14'>
						<div className='column_1'>
							<p className='packages_name'>Payroll setup</p>
						</div>
						<div className='column_2'>
							<div className='packages_minus'>-</div>
						</div>
						<div className='column_3'>
							<div className='packages_minus'>-</div>
						</div>
						<div className='column_4'>
							<div className='packages_plus'>+</div>
						</div>
					</div>
				</div>

				<div className='businessSW_additionally'>
					<p className='businessSw_item'>Additionally</p>
					<p className='additionally_text'>Additional services are not included in the packages. Feel free to add them when placing the order. You can add one or more additional services.</p>
					<div className='additionally_table'>
						<div className='additionally_row_grey'>
							<div className='AT_column1'>
								<p className='additionally_name'>Resident director</p>
							</div>
							<div className='AT_column2'>
								<p className='additionally_price'>5000 CHF/year</p>
							</div>
							<div className='AT_column3'>
								<a href='#' className='additionally_button'><span>+</span>Add to order</a>
							</div>
						</div>

						<div className='additionally_row_white'>
							<div className='AT_column1'>
								<p className='additionally_name'>Nominee shareholders</p>
							</div>
							<div className='AT_column2'>
								<p className='additionally_price'>1500 CHF/year</p>
							</div>
							<div className='AT_column3'>
								<a href='#' className='additionally_button'><span>+</span>Add to order</a>
							</div>
						</div>

						<div className='additionally_row_grey'>
							<div className='AT_column1'>
								<p className='additionally_name'>AML officer</p>
							</div>
							<div className='AT_column2'>
								<p className='additionally_price'>9000 CHF/year</p>
							</div>
							<div className='AT_column3'>
								<a href='#' className='additionally_button'><span>+</span>Add to order</a>
							</div>
						</div>

						<div className='additionally_row_white'>
							<div className='AT_column1'>
								<p className='additionally_name'>Accounting</p>
							</div>
							<div className='AT_column2'>
								<p className='additionally_price'>170 CHF/hour</p>
							</div>
							<div className='AT_column3'>
								<a href='#' className='additionally_button'><span>+</span>Add to order</a>
							</div>
						</div>

						<div className='additionally_row_grey'>
							<div className='AT_column1'>
								<p className='additionally_name'>Shared office address</p>
							</div>
							<div className='AT_column2'>
								<p className='additionally_price'>400 CHF/month</p>
							</div>
							<div className='AT_column3'>
								<a href='#' className='additionally_button_buy'>✓ Added</a>
							</div>
						</div>

						<div className='additionally_row_white'>
							<div className='AT_column1'>
								<p className='additionally_name'>Assistance with opening a bank account</p>
							</div>
							<div className='AT_column2'>
								<p className='additionally_price'>170 CHF/hour</p>
							</div>
							<div className='AT_column3'>
								<a href='#' className='additionally_button'><span>+</span>Add to order</a>
							</div>
						</div>

						<div className='additionally_row_white'>
							<div className='AT_column1'>
								<a href='#' className='additionally_buy'>Buy for <span className='span_button'>400 CHF</span></a>
							</div>
						</div>
					</div>
				</div>

			 </div>
        </div>
    )
  }


export default BusinessSw;
