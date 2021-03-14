import React, { Fragment, useState } from "react";
import Form from "./component/Form";

function App() {
  //list of all appointemts akka allAppos
  const [allAppos, saveAppos] = useState([]);

  //function to take the actual list of appos and add a new one in the Appo State
  const createAppo = (appo) => {
    //the function to acces and update the AllAppos State

    //copy the list of all appos , //adding the new appo in the appo State
    saveAppos([...allAppos, appo]);
  };
  return (
    <Fragment>
      <h1>Pets Doctor Appointment</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppo={createAppo} />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
