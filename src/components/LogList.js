import React from "react";
import PropTypes from "prop-types";
import Log from "./Log";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'


function LogList(props){

  const topListStyle = {
    textAlign: "center",
    fontFamily: 'Berkshire Swash',
    color: 'rgba(42,82,66)',
    marginBottom: '20px'
  }

  useFirestoreConnect([
    { collection: 'logs' }
  ]);

  const logs = useSelector(state => state.firestore.ordered.logs);

  if(isLoaded(logs)) {
    return (
      <React.Fragment>
        {logs.map((log) => {
          return <Log
            whenLogClicked = { props.onLogSelection }
            author={log.author}
            location={log.location}
            date={log.author}
            species={log.species}
            length={log.length}
            weight={log.weight}
            fly={log.fly}
            waterCond={log.waterCond}
            createdAt={log.createdAt}
            id={log.id}
            key={log.id}/>  
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

  

//   return (
//     <React.Fragment>
//       <div style={topListStyle}>
//         <h1>Recent Catches</h1>
//       </div>
//       {/* <hr/> */}
      
//       <Col>
//         {Object.values(props.logList).map((log) =>
//         <div className="card"> 
//           <Log
//           whenLogClicked={props.onLogSelection}
//           author={log.author}
//           location={log.location}
//           date={log.author}
//           species={log.species}
//           length={log.length}
//           weight={log.weight}
//           fly={log.fly}
//           waterCond={log.waterCond}
//           createdAt={log.createdAt}
//           id={log.id}
//           key={log.id}
//           />  
//         </div>
//         )}
//       </Col>
      
//     </React.Fragment>
//   );
// }

LogList.propTypes = {
  // logList: PropTypes.object,
  onLogSelection: PropTypes.func
}

export default LogList;  