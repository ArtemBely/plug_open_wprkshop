import React from 'react';
//@ts-ignore
import background from '../../public/images/aigrKLc6xc0.png';
//@ts-ignore
import logo from '../../public/images/Group 207.svg';





function TaxLegal(){
    return(
        <div className='container'>
          <div className='wrap_taxLegal'>
			 	<div className='taxLegal_header'>
					 <img src={background} id='background_tax'/>
					 <img src={logo} id='logo_tax'/>
				</div>
				<h3 className='taxLegal_title'>Tax and Legal</h3>
				<p className='taxLegal_subtitle'>Opening a corporate bank account in Switzerland is necessary to set <br/> up a company here. As a matter of fact, the Swiss bank account opening process must be completed prior to the incorporation of the company with the Trade Register. A bank statement indicating the deposit of the share capital is needed to be filed alongside the company`s statutory documents. The most important part of the process is to choose the bank who will support your business strategy and the region you are targeting.</p>
				<a href="#" className='taxLegal_button'>Free Consultation</a>
				<p className='section_title1'>International tax solutions</p>
				<div className='taxLegal_section1'>
					<p className='section1_text tax_text'>Tax advisory both in a Swiss local context and international context</p>
				</div>
				<p className='section_title2'>Legal assistance</p>
				<div className='taxLegal_section2'>
					<p className='section2_item1'>Legal advisory and notary services</p>
					<p className="section2_text tax_text">• Formation companies and foundations as per Swiss law including notarization of formation documents</p>
					<p className="section2_text tax_text">• Advisory and preparation of articles of incorporation </p>
					<p className="section2_text tax_text">• Advisory and preparation of legal documents for restructuring companies, such as mergers, conversions, asset deals, splitting and other deals according to the Swiss and merger law including notarization of documents.</p>
					<p className="section2_text tax_text">• Advisory and preparation of legal documents for capital increases, catch-up of capital subscription and capital decreases including notarization of documents.</p>
					<p className="section2_text tax_text">• Advisory and preparation of legal documents for dissolution of company including notarization of documents.</p>
					<p className="section2_text tax_text">• Act as liquidator of Swiss companies</p>
					<p className="section2_text tax_text">• Notarization of minutes annual general assembly and Board meetings</p>
					<p className="section2_text tax_text">• Notarization of marriage and inheritance contacts and wills</p>
					<p className="section2_text tax_text">• Notarization of signatures and companies of documents</p>
					<p className="section2_text tax_text">• Notarization of German legal acts, where the German law allows a Swiss notary to perform the notarization</p>
					<p className='section2_item2'>Other legal services</p>
					<p className="section2_text tax_text">• Legal advisory in trade and business law</p>
					<p className="section2_text tax_text">• Legal advisory in the law of contract</p>
					<p className="section2_text tax_text">• Legal advisory in marriage and inheritance law</p>
					<p className="section2_text tax_text">• Distribution of estate and act as executor of the will</p>
					<p className="section2_text tax_text">• Act as representative of clients for any legal matters</p>
				</div>
				<p className='section_title3'>Accounting support</p>
				<div className='taxLegal_section3'>
					<p className='section3_item'>Our accounting, tax, payroll and other related services</p>
					<p className="section3_text tax_text">• Financial accounting for all sizes of Swiss companies and Swiss subsidiaries of international companies</p>
					<p className="section3_text tax_text">• Accounts payable and accounts receivable accounting</p>
					<p className="section3_text tax_text">• Payroll and HR services</p>
					<p className="section3_text tax_text">• Social security advisory both in Swiss local and in international context</p>
					<p className="section3_text tax_text">• Payment of invoices and salaries on behalf of client</p>
					<p className="section3_text tax_text">• Financial planning and budgeting services</p>
					<p className="section3_text tax_text">• VAT-Filings and VAT-advisory</p>
					<p className="section3_text tax_text">• Act as Swiss VAT representative</p>
					<p className="section3_text tax_text">• Acting as external CFO or finance manager </p>
					<p className="section3_text tax_text">• Acting as external financial consultant</p>
					<p className="section3_text tax_text">• Audit for small and medium Swiss companies</p>
					<p className="section3_text tax_text">• Financial and strategy advisory </p>
				</div>
			 </div>
        </div>
    )
  }


export default TaxLegal;
