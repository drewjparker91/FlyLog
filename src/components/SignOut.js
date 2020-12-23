
import React from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState, useRef } from 'react';

function SignOut() { //sign out function

  const auth = firebase.auth();

  return auth.currentUser && (
    <button id="fart" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


export default SignOut;