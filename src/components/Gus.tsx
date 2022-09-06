import React from 'react';
//@ts-ignore
import logo from '../../public/images/Group 7.svg';
//@ts-ignore
import contact from '../../public/images/ant-design_phone-outlined.svg';
//@ts-ignore
import mail from '../../public/images/ant-design_mail-outlined.svg';
//@ts-ignore
import fone from '../../public/images/fg 1-2.png';

class Gus extends React.Component {

    render() {
      return(
        <p className='wrap_gus'>
            <div className='gus'>
                <div className='wrap_elements'>
                    <img src={logo} id='logo'/>
                    <p className='title'>Проектируем пространства для жизни, работы и творчества</p>
                    <p className='text'>«Открытые мастерские» — проектная организация, входящая в группу компаний «ОСНОВА»,
                                          обладающая опытом проектирования разнопрофильных объектов: жилых домов,
                                          офисных комплексов и объектов социально-культурного назначения.</p>
                    <p className='text prof'>Слаженная команда профессионалов осуществляет весь комплекс проектных работ: </p>
                    <p className='text'>→ архитектурная концепция</p>
                    <p className='text down_street'>→ проектная и рабочая документация, включая осуществление авторского надзора при строительстве</p>
                    <p className='text down_street'>Разработка документации с применением технологий информационного моделирования (BIM) позволяет эффективно решать сложные и амбициозные задачи.</p>
                    <div className='wrap_contacts'>
                        <p className='each_contact'><img src={contact} className='each_icon'/> <a href="tel:+74997536333" className='com_links'>+74997536333</a>  доб. 2046</p>
                        <p className='each_contact' id='street'>Улица Богородский Вал, дом 3 </p>
                        <p className='each_contact' id='post'><img src={mail} className='each_icon'/> <a href="mailto:info@otmas.ru" className='com_links'> info@otmas.ru</a></p>
                        <p className='each_contact' id='house'>строение 32, Москва, 107076</p>
                        <p className='hidden_contact each_contact'>Улица Богородский Вал, дом 3 строение 32, Москва, 107076</p>
                    </div>
                </div>
                <div className='wrap_fone'><img src={fone} id='fone' /></div>
            </div>
        </p>
      )
    }
}

export default Gus;
