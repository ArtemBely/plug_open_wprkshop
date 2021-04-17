import React from 'react';
import documents from '../../public/images/Rectangle 132.png';

function Dialog5() {
  return(
    <div className='wrap_dialog5'>
      <div className='dialog5'>
        	<div></div>
                  <div className='dialog5_message1'>
            		<p className='dialog3_mes__text1'>Шикарно, скидывай ссылку на документ</p>
        			<p className='mes__name1 name_edit1'>Любовь Геннадьевна</p>
            	  </div>
                	<div className='dialog3_message2 blue_bubble'>
                        <img src={documents} className='doc_files' id='img1'/>
                        <img src={documents} className='doc_files' id='img2'/>
                        <img src={documents} className='doc_files' id='img3'/>
                		    <p className='dialog3_mes__text2 name_edit4'>collab.pro/doc/7384364..</p>
        					<p className='mes__name2 name_edit3'>Константин</p>
            	    </div>

        			<div className='dialog5_message3'>
        				<p className='dialog3_mes__text1'>Готово</p>
        				<p className='mes__name3 name_edit2'>Любовь Геннадьевна</p>
        			</div>
        	<div></div>
        </div>
    </div>    
  )
}

export default Dialog5;
