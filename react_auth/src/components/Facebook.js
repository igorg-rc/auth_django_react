import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class FacebookSocialAuth extends Component {
  render() {
    const fbResponse = (response) => {
      console.log(response);
    }
    return (
      <div className="App">
        <h1>Login with facebook:</h1>

        <FacebookLogin
          textButton="CONNECT TO FACEBOOK"
          autoLoad={true}
          appId= "293182291998047"
          fields="name,email,picture"
          callback={fbResponse}
        />
      </div>
    );
  }
}

export default FacebookSocialAuth;