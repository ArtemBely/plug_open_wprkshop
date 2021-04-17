import React from 'react';
import picture1 from '../../public/images/Group 20.png';
import picture2 from '../../public/images/Group 23.png';

function Pictures() {
  return (
    <div className='wrap_picturesMain'>
      <div className='wrap_pictures'>
        <p id='without'>Без Коллаба</p>
          <p id='five_min'>Через 5 минут</p>
          <img src={picture1} className='both_pictures'/>
        <img src={picture2} className='both_pictures'/>
      </div>
    </div>  
  )
}

export default Pictures;
