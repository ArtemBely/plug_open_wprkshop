import React from 'react';
import photo1 from '../../public/images/Xz8zwurX_SA.svg';
import photo2 from '../../public/images/jns8BPueAgU.svg';

function Dialog2() {
  return(
    <div className='wrap_dialog2'>
      <div className='dialog2'>
        <div></div>
            <div className='dialog2_message1'>
              <img src={photo1} id='lyubov2'/>
                <p className='mes__text1'>Вам что, сложно подписать?</p>
                 </div>
                  <p className='mes__name1 mess3'>Любовь Геннадьевна</p>
                   <div className='dialog2_message2'>
                   <img src={photo2} id='kostya2'/>
                  <p className='dialog2_mes__text2'>Я сейчас в дороге, так будет быстрее. Смотрите как удобно.</p>
                <p className='mes__name2 mess4'>Константин</p>
            </div>
         <div></div>
      </div>
    </div>  
  )
}

export default Dialog2;
