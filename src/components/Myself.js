import React from 'react';
import mainDock from '../../public/images/22 2 — копия.png';

function Myself() {
  return (
    <div className='myself'>
      <div className='inside_myself'>
        <p className='common_myself'>Все договора в одном месте</p>
        <p className='purple'></p><p className='purple'></p>
        <p className='common_myself'>Фильтр по документам и  поиск названию, категориям и содержанию</p>
        <p className='common_myself'>Один клик для подписи</p>
        <p className='purple'></p><p className='purple'></p>
        <p className='common_myself'>Превью каждого документа</p>
        <p className='common_myself'>Актуальный статус документа</p>
        <p className='purple'></p>
        <p className='common_myself'>Быстрое копирование договоров</p>
        <p className='purple'></p><p className='purple'></p>
        <p className='common_myself'>Ссылка подписания документа для второй стороны</p>
        <img src={mainDock} id='exapmle_doc'/>
      </div>
    </div>
  )
}

export default Myself;
