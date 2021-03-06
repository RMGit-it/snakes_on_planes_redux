import React from "react";
import PropTypes from "prop-types";

function SnakeForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <input
          type = "text"
          name = "species"
          placeholder = "Species Name" />
        <input
          type = "text"
          name = "nativeTo"
          placeholder = "Native To" />
        <input
          type = "text"
          name = "description"
          placeholder = "Description" />
        <input
          type = "text"
          name = "danger"
          placeholder = "Danger" />
        <button type = "submit"> {props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

SnakeForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default SnakeForm;