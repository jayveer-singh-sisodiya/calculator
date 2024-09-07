import PropTypes from "prop-types";

const Display = ({ displayValue, error }) => {



  return (
    
    <div className="mb-3">
      <input
        type="text"
        value={error || displayValue}
        className="form-control"
        id="exampleFormControlInput1" readOnly
      />
    </div>
  );
};

Display.propTypes = {
  input: PropTypes.string.isRequired,
};

export default Display;
