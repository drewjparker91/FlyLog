import React from "react";
import FinalHeader from "./FinalHeader";
import Footer from "./Footer";
import LogControl from "./LogControl";
import Signin from "./Signin";
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from "firebase/app";
import 'firebase/auth'

function App(){
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  return (
    <React.Fragment>
      <div className='contain'>
        <div className='header'>
          <FinalHeader />
        </div>
        <div className="si">
          {user ? <LogControl /> : <Signin />}
        </div>
        {/* <Switch>
          <Route Path="/signin">
            <Signin />
          </Route>
          <Route path="/">
            <LogControl />
          </Route>
        </Switch>  */}
        <Footer />
      </div>
    </React.Fragment>
  );
  }

export default App;

