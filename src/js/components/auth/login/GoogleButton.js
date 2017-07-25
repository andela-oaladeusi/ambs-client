// import React, { Component } from 'react';

// export default class GoogleButton extends Component {
//   constructor(props) {
//     super(props);
//     this.auth2 = '';
//     this.googleUser = '';
//     this.gapi = props.gapi;
//     this.initSigninV2 = this.initSigninV2.bind(this);
//     this.signinChanged = this.signinChanged.bind(this);
//     this.userChanged = this.userChanged.bind(this);
//   }

//   componentDidMount() {
//     this.appStart();
//   }

//   appStart() {
//     this.gapi.load('auth2', this.initSigninV2);
//   }

//   /**
//    * Initializes Signin v2 and sets up listeners.
//    */
//   initSigninV2() {
//     this.auth2 = this.gapi.auth2.init({
//         client_id: '94299773001-q0r47o4114hpnrqjq8tglkuv4oshmehp.apps.googleusercontent.com',
//         scope: 'profile'
//     });

//     // Listen for sign-in state changes.
//     this.auth2.isSignedIn.listen(this.signinChanged);

//     // Listen for changes to current user.
//     this.auth2.currentUser.listen(this.userChanged);

//     // Sign in the user if they are currently signed in.
//     if (this.auth2.isSignedIn.get() === true) {
//       this.auth2.signIn();
//     }

//     // Start with the current live values.
//     this.refreshValues();
//   }

//   /**
//    * Listener method for sign-out live value.
//    *
//    * @param {boolean} val the updated signed out state.
//    */
//   signinChanged(val) {
//     console.log('Signin state changed to ', val);
//   }

//   /**
//    * Listener method for when the user changes.
//    *
//    * @param {GoogleUser} user the updated user.
//    */
//   userChanged(user) {
//     console.log('User now: ', user);
//     this.googleUser = user;
//   }

//   /**
//    * Retrieves the current user and signed in states from the GoogleAuth
//    * object.
//    */
//   refreshValues() {
//     if (this.auth2){
//       console.log('Refreshing values...');
//       this.googleUser = this.auth2.currentUser.get();
//     }
//   }

//   render() {
//     return(
//       <div className="g-signin2" data-size="medium" data-height="30">google</div>
//     )
//   }

// }
