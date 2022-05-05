import React from 'react';
//@ts-ignore
import background from '../../public/images/image 2.png';
//@ts-ignore
import logo from '../../public/images/UnionBank.svg';
//@ts-ignore
import timeline from '../../public/images/timeline.png';
//@ts-ignore
import timeline2 from '../../public/images/Frame 28.png';




function BankAccount(){
    return(
        <div className='container'>
          <div className='wrap_bankAccount'>
				 <div className='bankAccount_header'>
					 <img src={background} id='background_bank'/>
					 <img src={logo} id='logo_bank'/>
				 </div>
				 <h2 className='bankAccount_title'>Bank account in Switzerland</h2>
				 <p className='bankAccount_subtitle'>Opening a corporate bank account in Switzerland is necessary to set <br/> up a company here. As a matter of fact, the Swiss bank account opening process must be completed prior to the incorporation of the company with the Trade Register. A bank statement indicating the deposit of the share capital is needed to be filed alongside the company`s statutory documents. The most important part of the process is to choose the bank who will support your business strategy and the region you are targeting.</p>
				 <h4 className='bankAccount_item'>How to open a bank account</h4>
				 <div className='timeline_block'>
				 	<img src={timeline} id='timeline_img'/>
				 </div>
				 <div className='timeline_block2'>
				 	<img src={timeline2} id='timeline_img2'/>
				 </div>
				 <div className='bankAccount_block1'>
				 	<h4 className='bankAccount_item'>Advantages of opening a bank account in Switzerland</h4>
					<p className='advantages_block1 advantages1'>The main benefits of Swiss bank accounts are the low level of the financial risk and the high level of privacy</p>
					<p className='advantages_block1 advantages2'>Swiss law prevents the bank from disclosing any information regarding an account (even its existence) without the depositor's permission, except in cases where severe criminal activity is suspected</p>
					<p className='advantages_block1 advantages3'>The fact that Switzerland has stayed politically stable and historically neutral makes it an ideal place for private banks, family offices, funds and other financial structures. </p>
					<p className='advantages_block1 advantages4'>The Swiss Banking System is the most secure in the world. In case of the implausible event of a collapse of the banking system the holders` funds are backed in full by the Swiss Bankers Association depositors agreement.</p>
					<a href='#' className='block1_button'>Request a Free Consultation</a>
				 </div>
				 <div className='bankAccount_block2'>
				 	<h4 className='bankAccount_item'>How to open a corporate bank account in Switzerland</h4>
					<p className='block2_text6'>There is a certain list of documents to be filed to the Swiss bank in order to open a corporate bank account in Switzerland:</p>
					<p className='bankAccount_text block2_text1'>Details of all shareholders of the company in the form of copies of valid passports or IDs and permanent addresses.</p>
					<p className='bankAccount_text block2_text2'>Business incorporation information and contact person.</p>
					<p className='bankAccount_text block2_text3'>Information about the company.</p>
					<p className='bankAccount_text block2_text4'>Information about the type of account, services and intentions of using it.</p>
					<p className='bankAccount_text block2_text5'>Information about the potential cash withdrawals.</p>
					<a href='#' className='block2_button'>Download a checklist to open a corporate bank account</a>
				 </div>
				 <div className='bankAccount_block3'>
				 	<h4 className='bankAccount_item'>Important to know</h4>
					<p className='bankAccount_text block3_text1'>It might be also a case that the bank would request a business plan or some other information regarding the potential growth and development plans in order to determine the financial soundness of the company.</p>
					<p className='bankAccount_text block3_text2'>Each bank has its own regulation, documentation requirements, and application procedure, but we guarantee to help you choose the bank which meets your business requirements and make the procedure as fast and smooth as possible.</p>
					<p className='bankAccount_text block3_text3'>We would love to help you to choose the right bank for your business operations and help with the application process. Our goal is to support your success and have your corporate bank account as soon as possible. But we know that opening a bank account in Switzerland for non-swiss beneficiaries could be quite difficult. Thus, we guarantee a refund of 70% in case of application rejection by 3 chosen banks.</p>
				 </div>
			 </div>
        </div>
    )
  }


export default BankAccount;
