import React from 'react';

class Profile extends React.Component{

  constructor() {

    super()
  }

  render() {
      return(
        <div>
          Это мой профиль
          <a href='/profile/logout'>EXIT</a>
        </div>
      )
  }
}

export default Profile;
