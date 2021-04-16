import React from 'react';

class Enter extends React.Component {

constructor(props) {
  super(props)

    let messages;
    let messages2;
    let cond;
    let wrongCode;

  if(__isBrowser__) {
    messages = window.__INITIAL_DATA__;
    messages2 = window.__INITIAL_INFO__;
    cond = window.__INITIAL_STATE__;
    wrongCode = window.__INITIAL_CODE__;
  }

  this.state = {
    messages,
    messages2,
    cond,
    wrongCode
  }
}


  render() {
      return (
        <div>
          <form action='/signup_code_form_check/signin' method='POST'>
             <input type='text' name='email' required />
             <input type='text' name='password' required />
             <button type='submit'>ENTER</button>
          </form>
        </div>
      )
  }
}

export default Enter;
