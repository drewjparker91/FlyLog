import React from "react";
import FinalHeader from "./FinalHeader";
import Footer from "./Footer";
import LogControl from "./LogControl";

function App(){
  return (
    <React.Fragment>
      <div className='contain'>
        <div className='header'>
          <FinalHeader />
        </div>
        <LogControl />
        <Footer />
      </div>
    </React.Fragment>
  );
  }

export default App;

