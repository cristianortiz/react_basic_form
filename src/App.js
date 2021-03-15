import React, { Fragment, useState } from "react";
import Form from "./component/Form";
import Appo from "./component/Appo";

function App() {
  //list of all appointemts akka allAppos using a hook
  const [allAppos, saveAppos] = useState([]);

  //function to take the actual list of appos and add a new one from form component in the Appo State
  const createAppo = (appo) => {
    //the function to acces and update the AllAppos State
    saveAppos([...allAppos, appo]); //copy the list of all appos , adding the new appo in the appo State
  };

  //function to delete an appointment by id
  const deleteAppo = (id) => {
    //from appos list in "your appointments" (allAppos State) copy all in a new array, less the one whit the id equals to the appo for delete
    const newAppos = allAppos.filter((appo) => appo.id != id);
    saveAppos(newAppos);
  };

  return (
    <Fragment>
      <h1>Pets Doctor Appointment</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppo={createAppo} />
          </div>
          <div className="one-half column">
            <h1>Your Appointments</h1>
            {allAppos.map((appo) => (
              <Appo key={appo.id} appo={appo} deleteAppo={deleteAppo} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
