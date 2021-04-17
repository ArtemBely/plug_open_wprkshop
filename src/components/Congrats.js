import React from 'react';

class Congrats extends React.Component{

  constructor(props) {

    super(props)

    let indicate;
    if(__isBrowser__) {
      indicate = window.__INITIAL_DATA__;
    }

    this.state = { indicate }
  }

  indic = () => {
    if(this.state.indicate && this.state.indicate === 'nothing') {
      return (
        <div>
          Пройдите регистрацию
        </div>
      )
    }
    if(this.state.indicate && this.state.indicate === 'right') {
      return (
        <div>
          Поздравляем, регистрация пройдена!
        </div>
      )
    }
    if(this.state.indicate && this.state.indicate === 'wrong') {
      return (
        <div>
          Неверный код подтверждения
        </div>
      )
    }
  }

  render() {
    return (
        <div className='victory'>
            {this.indic()}
        </div>
      )
  }
}

export default Congrats;
