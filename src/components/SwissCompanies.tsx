import React from 'react';
//@ts-ignore
import background from '../../public/images/image 22.png';
//@ts-ignore
import logo from '../../public/images/Group 207.svg';





function SwissCompanies(){
    return(
        <div className='container'>
          <div className='wrap_SwissCompanies'>
				<div className='SwissCompanies_header'>
					<img src={background} id='background_swiss'/>
					<img src={logo} id='logo_swiss'/>
				</div>
				<h3 className='SwissCompanies_title'>Swiss Companies Setup</h3>
				<div className='SwissCompanies_information'>
					<p className='SwissCompanies_question'>Why to establish a company in Switzerland?</p>
					<p className='SwissCompanies_text'>Our goal is to make your business relocation to Switzerland as easy and efficient as possible. <span className='SwissCompanies_span'>You focus on your own business and we take care of formalities.</span></p>
					<p className='SwissCompanies_text '>Switzerland is known for its wealth and is often referred as tax-paradise. Unsurprisingly, there are many powerful Funds, Private Investors and Family Offices, investing in different asset classes like private equity, venture capital or real estate. If classical investments are relatively studied and understandable, the world of investments into emerging technologies is still a blue water for many Investment Advisors. Swiss federal and local governments are ones of the most open for new tech and business opportunities, simultaneously securing the financial sector and protecting investors. Ideal combination for both Investors and Startups.</p>
					<p className='SwissCompanies_text '>We would love to help you establish your company in Switzerland and guide through all possible formalities, networks, plan business activities and operating procedures.</p>
					<a href="#" className='SwissCompanies_button1'>Free Consultation</a>
					<a href="#" className='SwissCompanies_button2'>Online Incorporation</a>
					<a href="#" className='SwissCompanies_button3'>Cost Estimator</a>
					<div className='SwissCompanies_benefits'> 
						<p className='benefits_title'>Benefits of the Company Formation in Switzerland:</p>
						<p className='benefits_1 SwissCompanies_text'><span className="icon-plus">+</span>Governmental support of innovation and startups</p>
						<p className='benefits_2 SwissCompanies_text'><span className="icon-plus">+</span>Attractive tax rates</p>
						<p className='benefits_3 SwissCompanies_text'><span className="icon-plus">+</span>Strategic location</p>
						<p className='benefits_4 SwissCompanies_text'><span className="icon-plus">+</span>Financial stability</p>
						<p className='benefits_5 SwissCompanies_text'><span className="icon-plus">+</span>Centre of innovation</p>
						<p className='benefits_6 SwissCompanies_text'><span className="icon-plus">+</span>Excellent infrastructure</p>
					</div>
				</div>

					<p className='SwissCompanies_item'>Overview Legal Forms</p>
					<p className='SwissCompanies_text SwissCompanies_text_2'>For your convenience, below you can find competitive advantages of each form and choose the one that suits your business the most. From our side we would be glad to guide you through the process. If you are not a Swiss resident-assist you with local and legal formalities.</p>

					<table className='SwissCompanies_table'>
						<thead>
							<tr>
								<th className='table_column_none'></th>
								<th className='table_column'>GmbH (LLC)<a href='#' className='table_information'></a></th>
								<th className='table_column'>AG (Ltd.)<a href='#' className='table_information'></a></th>
								<th className='table_column'>Foundation<a href='#' className='table_information'></a></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th className='table_row'>Starting Capital</th>
								<th className='table_text'>From 20 000 CHF</th>
								<th className='table_text'>From 100 000 CHF <br/>(50 000 CHF paid in)</th>
								<th className='table_text'>50 000 CHF</th>
							</tr>
							<tr>
								<th className='table_row'>Liabilityl</th>
								<th className='table_text'>Limited to company assets</th>
								<th className='table_text'>Limited to company assets</th>
								<th className='table_text'>Limited to company assets</th>
							</tr>
							<tr>
								<th className='table_row'>Company Name </th>
								<th className='table_text'>+ LLC</th>
								<th className='table_text'>+ Ltd</th>
								<th className='table_text'>+ Foundation</th>
							</tr>
							<tr>
								<th className='table_row'>Number of persons</th>
								<th className='table_text'>At least one shareholder and one member of Board of Directors</th>
								<th className='table_text'>At least one shareholder and one member of Board of Directors</th>
								<th className='table_text'>-</th>
							</tr>
							<tr>
								<th className='table_row'>Participation</th>
								<th className='table_text'>Via capital contributions</th>
								<th className='table_text'>Via shares</th>
								<th className='table_text'>-</th>
							</tr>
							<tr>
								<th className='table_row'>Audit</th>
								<th className='table_text'>Opt – out (waiver of audit) possible</th>
								<th className='table_text'>Opt – out (waiver of audit) possible</th>
								<th className='table_text'>Obligatory</th>
							</tr>
							<tr>
								<th className='table_row'>Taxes</th>
								<th className='table_text'>Company tax declaration</th>
								<th className='table_text'>Company tax declaration</th>
								<th className='table_text'>-</th>
							</tr>
							<tr>
								<th className='table_row'>Bookkeeping</th>
								<th className='table_text'>Double - entry</th>
								<th className='table_text'>Double - entry</th>
								<th className='table_text'>-</th>
							</tr>
							<tr>
								<th className='table_row'>Advantages</th>
								<th className='table_text'>Low minimum capita <br/> Company Liability<br/> Participation possible</th>
								<th className='table_text'>Company Liability Anonymity of shareholders Shares easily transferable Company Image</th>
								<th className='table_text'>-</th>
							</tr>
							<tr>
								<th className='table_row'>Disadvantages</th>
								<th className='table_text'>Double taxation Requirements for management are strict Partners published in commercial register</th>
								<th className='table_text'>Double taxation Requirements for management are strict High capital requirements</th>
								<th className='table_text'>-</th>
							</tr>
							<tr className='last_row'>
								<th className='table_row'>Download</th>
								<td>
									<a href="#" className='link_last_row1'>Checklist for GmbH</a>
									<a href="#" className='link_last_row2'>Cost estimator</a>
									<a href="#" className='link_last_row3'>Online Incorporation</a>
								</td>
								<td>
									<a href="#" className='link_last_row4'>Checklist for AG</a>
									<a href="#" className='link_last_row5'>Cost estimator</a>
									<a href="#" className='link_last_row6'>Online Incorporation</a>
								</td>
								<td>
									<a href="#" className='link_last_row7'>Checklist for Foundation</a>
									<a href="#" className='link_last_row8'>Cost estimator</a>
									<a href="#" className='link_last_row9'>Online Incorporation</a>
								</td>
							</tr>
						</tbody>
					</table>

					<p className='SwissCompanies_item'>Our Packages</p>
					<p className='SwissCompanies_text SwissCompanies_text_2'>Our packages can suit any budget. Please find below basic packages and feel free to contact us, if you would like a special combination of the services.</p>
					<div className='packages'>
						<div className='first_row'>
							<div className='first_row_column2'>
								<p className='packages_rates'>Basic</p>
								<p className='packages_price'>500 CHF</p>
							</div>
							<div className='first_row_column3'>
								<p className='packages_rates'>Startup</p>
								<p className='packages_price'>1500 CHF</p>
							</div>
							<div className='first_row_column4'>
								<p className='packages_rates'>Premium</p>
								<p className='packages_price'>5000 CHF</p>
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

						<div className='last_row_packages'>
							<div className='last_row_column2'>
								<a  href='#' className='packages_button1'>Buy for <span className='span_button'>500 CHF</span></a>
							</div>
							<div className='last_row_column3'>
								<a  href='#' className='packages_button2'>Buy for <span className='span_button'>1500 CHF</span></a>
							</div>
							<div className='last_row_column4'>
								<a  href='#' className='packages_button3'>Buy for <span className='span_button'>5000 CHF</span></a>
							</div>
						</div>
					</div>

					<div className='additionally'>
						<p className='SwissCompanies_item'>Additionally</p>
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
					<p className='item_center'>QL Strategy is your reliable partner in Switzerland</p>
					<p className='text_center'>As your decision regarding a company formation in Switzerland has been made, <br/> let Quantum Leap Strategy AG guide you through the process and take care of the formalities.</p>

			 </div>
        </div>
    )
  }


export default SwissCompanies;
