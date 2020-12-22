
import React from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState, useRef } from 'react';

function SignOut() { //sign out function

  const signOutButton = {
    color: 'white',
    backgroundColor: '#2b473c',
    fontSize: '20px',
    padding: '10px 10px',
    borderRadius: '5px',
    margin: '10px 0px',
    cursor: 'pointer',
    width: 'auto',
  }
  const auth = firebase.auth();

  return auth.currentUser && (
    <div style={signOutButton}>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}
console.log(user)

export default SignOut;