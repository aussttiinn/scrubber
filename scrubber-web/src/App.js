import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const loadFacebookSDK = () => {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: '232486652952887',
          cookie: true,
          xfbml: true,
          version: 'v12.0'
        });

        window.FB.AppEvents.logPageView();
      };

      (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    };

    loadFacebookSDK();
  }, []);

  const handleFacebookLogin = () => {
    window.FB.login(function(response) {
      if (response.authResponse) {
        console.log('Facebook login successful:', response.authResponse);
      } else {
        console.log('Facebook login failed:', response);
      }
    }, {scope: 'email'});
  };

  const currentDateTime = new Date().toTimeString();

  return (
    <div>
      <p>Updated: {currentDateTime}</p>
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
    </div>
  );
}

export default App;