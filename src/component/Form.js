import React, { Fragment } from "react";

const Form = () => {
  return (
    <Fragment>
      <h2>Make an Appointment</h2>
      <form>
        <label>Pet's Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width" //input toma todo el espacio disponible
          placeholder="Pet's Name"
        />

        <label>Owner's Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width" //input toma todo el espacio disponible
          placeholder="Owner's Name"
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width" //input toma todo el espacio disponible
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width" //input toma todo el espacio disponible
        />
        <label>Symptons</label>
        <textarea className="u-full-width" name="symtomps"></textarea>

        <button type="submit" className="u-full-width button-primary">
          Make an Appointment
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
