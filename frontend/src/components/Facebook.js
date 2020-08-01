import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import fbLogin from './../services/fbLogin';

class FacebookSocialAuth extends Component {
  render() {
    const responseFacebook = async (response) => {
      let fbResponse  = await fbLogin(response.accessToken)
      console.log(fbResponse);
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
          callback={responseFacebook}
        />
      </div>
    );
  }
}

export default FacebookSocialAuth;