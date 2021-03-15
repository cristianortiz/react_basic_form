import React from "react";

const Appo = ({ appo, deleteAppo }) => (
  <div className="appo">
    <p>
      Pet: <span>{appo.pet}</span>
    </p>
    <p>
      Owner: <span>{appo.owner}</span>
    </p>
    <p>
      Date: <span>{appo.date}</span>
    </p>
    <p>
      Time: <span>{appo.time}</span>
    </p>
    <p>
      Symptoms: <span>{appo.symptoms}</span>
    </p>

    <button
      className="button eliminar u-full-width"
      onClick={() => deleteAppo(appo.id)}
    >
      Delete &times;
    </button>
  </div>
);

export default Appo;
