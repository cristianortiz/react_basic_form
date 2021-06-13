import React from "react";
import PropTypes from "prop-types";

const Appo = ({ appo, deleteAppo }) => (
  <div data-testid="appointment" className="appo">
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
      data-testid="btn-delete"
      className="button eliminar u-full-width"
      onClick={() => deleteAppo(appo.id)}
    >
      Delete &times;
    </button>
  </div>
);
//documenting and type checking whit proptypes
Appo.propTypes = {
  appo: PropTypes.object.isRequired,
  deleteAppo: PropTypes.func.isRequired,
};

export default Appo;
