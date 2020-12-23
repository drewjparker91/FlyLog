import firebase from "firebase/app";
import 'firebase/auth'
import React from "react";

function Signin() {

  const auth = firebase.auth();

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  
  return (
    <button id="fart" onClick={signInWithGoogle}>Sign in with Google</button>
  )
}



// function SignOut() { //sign out function
//   return auth.currentUser && (

//     <button onClick={() => auth.signOut()}>Sign Out</button>
//   )
// }
export default Signin;