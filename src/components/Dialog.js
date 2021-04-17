import React from 'react';
import photo1 from '../../public/images/Xz8zwurX_SA.svg';
import photo2 from '../../public/images/jns8BPueAgU.svg';

function Dialog() {
  return(
    <div  className='wrap_dialog'>
      <div className='dialog'>
    	  <div></div>
            <div className='message1'>
             <img src={photo1} id='lyubov'/>
      		      <p className='mes__text1'>Посмотрите, распечатайте, подпишите, потом отсканируйте, пришлите. ОБЯЗАТЕЛЬНО ПЕЧАТАЙТЕ В ЦВЕТЕ!</p>
      	         </div>
          	      <p className='mes__name1 mess1'>Любовь Геннадьевна</p>
          	       <div className='message2'>
                   <img src={photo2} id='kostya'/>
          		    <p className='mes__text2'>Давайте лучше через коллаб</p>
                <p className='mes__name2 mess2'>Константин</p>
      	    </div>
    	   <div></div>
      </div>
    </div>  
  )
}

export default Dialog;
