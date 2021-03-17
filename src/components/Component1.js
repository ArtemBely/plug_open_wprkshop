import React from 'react';
import order1 from '../../public/images/Договор на доработку сайта-1 6.png';
import order2 from '../../public/images/Договор на доработку сайта-1 7.png';
import order3 from '../../public/images/Договор на доработку сайта-1 8.png';
import arrow from '../../public/images/next.svg';

function Component1() {
  return (
    <div className='wrap_order'>
      <img src={order1} />
        <img src={arrow} className='arrow'/>
          <img src={order2} />
        <img src={arrow} className='arrow'/>
      <img src={order3} />
        <p>Подписываете договор с помощью смс</p>
          <p>Отправляете партнёру ссылку для подписи</p>
      <p>Подписанный договор за 5 минут без бумажной волокиты</p>
    </div>
  )
}

export default Component1;
