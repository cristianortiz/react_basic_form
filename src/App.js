import React, { Fragment, useState, useEffect } from "react";
import Form from "./component/Form";
import Appo from "./component/Appo";

function App() {
  //appointments aka appos in local storage
  let initialAppos = JSON.parse(localStorage.getItem("allAppos"));
  if (!initialAppos) {
    initialAppos = [];
  }
  console.log(initialAppos);
  //list of all appointemts akka allAppos, initialAppos in LS is the initial state values of useState and for useEffect hooks
  const [allAppos, saveAppos] = useState(initialAppos);

  //useEffect hook alwys listen when state changes, and is used to make some ops, use empty [] to executes one time only
  useEffect(() => {
    let initialAppos = JSON.parse(localStorage.getItem("allAppos"));

    if (initialAppos) {
      //if there is any appos in LS this appos will be the list of all appos
      localStorage.setItem("allAppos", JSON.stringify(allAppos));
    } else {
      localStorage.setItem("allAppos", JSON.stringify([])); //if there is not appos in LS then the list of appos will be an empty array []
    }
  }, [allAppos]); //alppos is the dependency param where the changes in the state reflects

  //function to take the actual list of appos and add a new one from form component in the Appo State
  const createAppo = (appo) => {
    //the function to acces and update the AllAppos State
    saveAppos([...allAppos, appo]); //copy the list of all appos , adding the new appo in the appo State
  };

  //function to delete an appointment by id
  const deleteAppo = (id) => {
    //from appos list in "your appointments" (allAppos State) copy all in a new array, less the one whit the id equals to the appo for delete
    const newAppos = allAppos.filter((appo) => appo.id !== id);
    saveAppos(newAppos); //save th new list of appos in the State
  };

  //conditional msg
  const title = allAppos.length === 0 ? "No Appointments" : "Your Appointments";
  console.log(allAppos.length);

  return (
    <Fragment>
      <h1 data-testid="title-app">Pets Doctor Appointment</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppo={createAppo} />
          </div>
          <div className="one-half column">
            <h2 data-testid="conditional-title">{title}</h2>
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
