import React from 'react';

class Registration extends React.Component{
  render(){
    return (
      <div className='wrap_reg_form'>
        <div className='reg_form'>
           <form className='registration_form' action='/signup_code_form_check' method='POST'>
              <input type='text' name='name' placeholder='Ваше имя' required />
                <input type='text' name='email' placeholder='Ваша почта' required />
                  <input type='tel' name='telephone' placeholder='Ваш телефон' required />
                 <input type='text' name='password' placeholder='Ваш пароль' required />
               <input type='text' name='confirm' placeholder='Подтвердите Ваш телефон' />
             <button type='submit'>Зарегистрироваться</button>
           </form>
        </div>
      </div>
    )
  }
}

export default Registration;
