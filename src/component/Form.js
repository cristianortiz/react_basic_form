import React, { Fragment, useState } from "react";
import uuid from "uuid/dist/v4"; //for generate uniques ID

//destructuring on props object to extract createAppo
const Form = ({ createAppo }) => {
  //appointment aka Appo hook, State,is an object the use "({})
  const [appo, updateAppo] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const [error, updateError] = useState(false); //is a bool this hook use only "()"

  //the user enters data in a form field
  const updateState = (e) => {
    //the function to acces and update the appo State
    updateAppo({
      ...appo, //copy of appo state
      [e.target.name]: e.target.value, //mapping form field whit user typing  input data
    });
  };

  //user click the submit form button
  const submitAppo = (e) => {
    e.preventDefault();

    //form validations
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      symptoms.trim() === ""
    ) {
      updateError(true);
      return;
    }

    //delete error msg when form valitation is correct
    updateError(false);

    //asigng and ID
    appo.id = uuid();
    console.log(appo);

    //make the appo using the prop createAppo sent from App.js
    createAppo(appo);

    //rest the form
    updateError({
      pet: "",
      owner: "",
      date: "",
      time: "",
      symptoms: "",
    });
  };

  //extracting input values from appo through destructuring
  const { pet, owner, date, time, symptoms } = appo;

  return (
    <Fragment>
      <h2>Make an Appointment</h2>

      {error ? <p className="alerta-error">All fields are mandatory</p> : null}
      <form onSubmit={submitAppo}>
        <label>Pet's Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width" //input toma todo el espacio disponible
          placeholder="Pet's Name"
          onChange={updateState}
          value={pet}
        />

        <label>Owner's Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width" //input toma todo el espacio disponible
          placeholder="Owner's Name"
          onChange={updateState}
          value={owner}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={updateState}
          value={date}
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={updateState}
          value={time}
        />
        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          onChange={updateState}
          value={symptoms}
        ></textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
          onChange={updateState}
        >
          Make an Appointment
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
