import React from 'react';
import { NavLink } from 'react-router-dom';
import image1 from '../../public/images/22 2.png';
import image2 from '../../public/images/Освещение.svg';
import image3 from '../../public/images/Зеркала.svg';
import image4 from '../../public/images/Стелажи.svg';
import image5 from '../../public/images/Фон — копия 4.svg';
import image6 from '../../public/images/Фон-2.svg';
import image7 from '../../public/images/Аксессуары.svg';

class Animation1 extends React.Component {

  constructor() {
    super()

    this.slider = React.createRef();
    this.image1 = React.createRef();
    this.image2 = React.createRef();
    this.image3 = React.createRef();
    this.image4 = React.createRef();
    this.image5 = React.createRef();
    this.image6 = React.createRef();
    this.image7 = React.createRef();
  }

goAway = () => {
  if(this.slider.current.classList.contains('slide1')) {
    this.slider.current.classList.remove('slide1');
  }
  if(this.slider.current.classList.contains('slide2')) {
    this.slider.current.classList.remove('slide2');
  }
  if(this.slider.current.classList.contains('slide3')) {
    this.slider.current.classList.remove('slide3')
  }
  if(this.slider.current.classList.contains('slide4')) {
    this.slider.current.classList.remove('slide4')
  }
  if(this.slider.current.classList.contains('slide5')) {
    this.slider.current.classList.remove('slide5')
  }
  if(this.slider.current.classList.contains('slide6')) {
    this.slider.current.classList.remove('slide6')
  }
}
goAway2 = () => {
  if(!this.slider.current.classList.contains('slide1')) {
    this.slider.current.classList.add('slide1');
  }
  if(this.slider.current.classList.contains('slide2')) {
    this.slider.current.classList.remove('slide2');
  }
  if(this.slider.current.classList.contains('slide3')) {
    this.slider.current.classList.remove('slide3')
  }
  if(this.slider.current.classList.contains('slide4')) {
    this.slider.current.classList.remove('slide4');
  }
  if(this.slider.current.classList.contains('slide5')) {
    this.slider.current.classList.remove('slide5');
  }
  if(this.slider.current.classList.contains('slide6')) {
    this.slider.current.classList.remove('slide6')
  }
}
goAway3 = () => {
  if(this.slider.current.classList.contains('slide1')) {
    this.slider.current.classList.remove('slide1');
    this.slider.current.classList.add('slide2');
  }
  else {
    this.slider.current.classList.add('slide2');
  }
  if(this.slider.current.classList.contains('slide3')) {
    this.slider.current.classList.remove('slide3')
  }
  if(this.slider.current.classList.contains('slide4')) {
    this.slider.current.classList.remove('slide4');
  }
  if(this.slider.current.classList.contains('slide5')) {
    this.slider.current.classList.remove('slide5');
  }
  if(this.slider.current.classList.contains('slide6')) {
    this.slider.current.classList.remove('slide6')
  }
}
goAway4 = () => {
  if(!this.slider.current.classList.contains('slide1')) {
    this.slider.current.classList.add('slide3');
  }
  if(this.slider.current.classList.contains('slide2')) {
    this.slider.current.classList.remove('slide2');
    this.slider.current.classList.add('slide3');
  }
  else if(this.slider.current.classList.contains('slide1')) {
    this.slider.current.classList.remove('slide1');
    this.slider.current.classList.add('slide3');
  }
  if(this.slider.current.classList.contains('slide4')) {
    this.slider.current.classList.remove('slide4');
  }
  if(this.slider.current.classList.contains('slide5')) {
    this.slider.current.classList.remove('slide5');
  }
  if(this.slider.current.classList.contains('slide6')) {
    this.slider.current.classList.remove('slide6')
  }
}
goAway5 = () => {
  if(!this.slider.current.classList.contains('slide1')) {
    this.slider.current.classList.add('slide4');
  }
  else if(this.slider.current.classList.contains('slide1')) {
    this.slider.current.classList.remove('slide1');
    this.slider.current.classList.add('slide4');
  }
  if(this.slider.current.classList.contains('slide2')) {
    this.slider.current.classList.remove('slide2');
    this.slider.current.classList.add('slide4');
  }
  if(this.slider.current.classList.contains('slide3')) {
    this.slider.current.classList.remove('slide3');
    this.slider.current.classList.add('slide4');
  }
  if(this.slider.current.classList.contains('slide5')) {
    this.slider.current.classList.remove('slide5');
  }
  if(this.slider.current.classList.contains('slide6')) {
    this.slider.current.classList.remove('slide6')
  }
}
goAway6 = () => {
  if(!this.slider.current.classList.contains('slide1')) {
    this.slider.current.classList.add('slide5');
  }
  else if(this.slider.current.classList.contains('slide1')) {
    this.slider.current.classList.remove('slide1');
    this.slider.current.classList.add('slide5');
  }
  if(this.slider.current.classList.contains('slide2')) {
    this.slider.current.classList.remove('slide2');
    this.slider.current.classList.add('slide5');
  }
  if(this.slider.current.classList.contains('slide3')) {
    this.slider.current.classList.remove('slide3');
    this.slider.current.classList.add('slide5');
  }
  if(this.slider.current.classList.contains('slide4')) {
    this.slider.current.classList.remove('slide4');
    this.slider.current.classList.add('slide5');
  }
  if(this.slider.current.classList.contains('slide6')) {
    this.slider.current.classList.remove('slide6');
    this.slider.current.classList.add('slide5');
  }
}
goAway7 = () => {
  if(!this.slider.current.classList.contains('slide1')) {
    this.slider.current.classList.add('slide6');
  }
  else if(this.slider.current.classList.contains('slide1')) {
    this.slider.current.classList.remove('slide1');
    this.slider.current.classList.add('slide6');
  }
  if(this.slider.current.classList.contains('slide2')) {
    this.slider.current.classList.remove('slide2');
    this.slider.current.classList.add('slide6');
  }
  if(this.slider.current.classList.contains('slide3')) {
    this.slider.current.classList.remove('slide3');
    this.slider.current.classList.add('slide6');
  }
  if(this.slider.current.classList.contains('slide4')) {
    this.slider.current.classList.remove('slide4');
    this.slider.current.classList.add('slide6');
  }
  if(this.slider.current.classList.contains('slide5')) {
    this.slider.current.classList.remove('slide5');
    this.slider.current.classList.add('slide6');
  }
}

  render() {
    return(
      <div className='wrap_animation'>
        <p className='opportunities'>Возможности</p>
        <p className='your_click'>Ваша подпись за один клик, вторая сторона подписывает также легко по ссылке, шаблоны договоров, все документы разделены по папочкам и категориям</p>
        <NavLink to='/all_documents' className='grey_square' activeClassName='white_square' onClick={this.goAway}>Все договора в одном месте</NavLink>
        <NavLink to='/one_click' className='grey_square' activeClassName='white_square' onClick={this.goAway2}>Один клик для подписи</NavLink>
        <NavLink to='/actual' className='grey_square' activeClassName='white_square' onClick={this.goAway3}>Актуальный статус документа</NavLink>
        <NavLink to='/speed_copie' className='grey_square' activeClassName='white_square' onClick={this.goAway4}>Быстрое копирование договоров</NavLink>
        <NavLink to='/filter' className='grey_square' activeClassName='white_square' onClick={this.goAway5}>Фильтр по документам и поиск названию, категориям и содержанию</NavLink>
        <NavLink to='/preview' className='grey_square' activeClassName='white_square' onClick={this.goAway6}>Превью каждого документа</NavLink>
        <NavLink to='/link_documents' className='grey_square' activeClassName='white_square' onClick={this.goAway7}>Ссылка подписания документа для второй стороны</NavLink>
        <div className='wrap_img1'>
         <div className='wrap_img2' ref={this.slider}>
            <img src={image1} className='all_images' ref={this.image1} />
                <img src={image2} className='all_images' ref={this.image2} />
                  <img src={image3} className='all_images' ref={this.image3} />
                    <img src={image4} className='all_images' ref={this.image4} />
                  <img src={image5} className='all_images' ref={this.image5} />
                <img src={image6} className='all_images' ref={this.image6} />
            <img src={image7} className='all_images' ref={this.image7} />
          </div>
        </div>
      </div>
    )
  }
}

export default Animation1;
