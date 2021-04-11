import React from 'react';

class Code extends React.Component {

  constructor() {
      super()

      let cond;
      if(__isBrowser__) {
        cond = window.__INITIAL_STATE__;
      }
      this.state = {
        cond
      }
      this.code = React.createRef();
    }

  render() {
      return (
          <div className="checkCode">
              <form action='/check_the_code' method='POST'>
                  <input type='text' name='manualCode' placeholder='CODE' ref={this.code} required />
                  <input type='hidden' name='mail' value={this.state.cond}/>
                  <button type='submit'>Подтвердить</button>
              </form>
              <p>PUT THE CODE HERE</p>
          </div>
        )
     }
}

export default Code;
