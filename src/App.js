import React, { Fragment } from "react";
import Form from "./component/Form";

function App() {
  return (
    <Fragment>
      <h1>Pets Doctor Appointment</h1>
      <div className="cointaner">
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
