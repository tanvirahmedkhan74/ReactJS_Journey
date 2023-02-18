import React from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label for="myBox" className="form-label">
            {props.title}
          </label>
          <textarea className="form-control" id="myBox" rows="3"></textarea>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = { title: PropTypes.string.isRequired };
