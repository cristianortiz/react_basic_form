import React, { Fragment, useState } from "react";
import uuid from "uuid/dist/v4"; //for generate uniques ID
import PropTypes from "prop-types";

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
    //to testing

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
    updateAppo({
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
      <h2 data-testid="title">Make an Appointment</h2>

      {error ? (
        <p data-testid="alert" className="alerta-error">
          All fields are mandatory
        </p>
      ) : null}
      <form onSubmit={submitAppo}>
        <label>Pet's Name</label>
        <input
          data-testid="pet"
          type="text"
          name="pet"
          className="u-full-width" //input toma todo el espacio disponible
          placeholder="Pet's Name"
          onChange={updateState}
          value={pet}
        />

        <label>Owner's Name</label>
        <input
          data-testid="owner"
          type="text"
          name="owner"
          className="u-full-width" //input toma todo el espacio disponible
          placeholder="Owner's Name"
          onChange={updateState}
          value={owner}
        />

        <label>Date</label>
        <input
          data-testid="date"
          type="date"
          name="date"
          className="u-full-width"
          onChange={updateState}
          value={date}
        />

        <label>Time</label>
        <input
          data-testid="time"
          type="time"
          name="time"
          className="u-full-width"
          onChange={updateState}
          value={time}
        />
        <label>Symptoms</label>
        <textarea
          data-testid="symptoms"
          className="u-full-width"
          name="symptoms"
          onChange={updateState}
          value={symptoms}
        ></textarea>

        <button
          data-testid="btn-submit"
          type="submit"
          className="u-full-width button-primary"
          onChange={updateState}
        >
          Send
        </button>
      </form>
    </Fragment>
  );
};

//using propTypes for documenting components
Form.propTypes = {
  createAppo: PropTypes.func.isRequired,
};

export default Form;
