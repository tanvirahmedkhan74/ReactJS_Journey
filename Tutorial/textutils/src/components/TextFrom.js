import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked");
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleAsciClick = () => {
    let newtext = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") newtext += " ";
      else newtext += text.charCodeAt(i) + ".";
    }
    setText(newtext);
  };

  const handleTextOnChange = (event) => {
    //console.log("Onchange was Done");
    setText(event.target.value); // event.target.value is the value of the textarea at the time of the event
  };

  const handleClearClick = () => {
    setText("");
  };

  const wordCount = () => {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") count++;
    }
    return count;
  };

  const [text, setText] = useState("Enter some text here"); // useState is a hook which returns an array of two elements -
  // the first element is the state variable and the second element is the function to update the state variable

  let count = wordCount();

  return (
    <>
      <div className="container my-3 --bs-info-bg-subtle">
        <h2>{props.title}</h2>
      </div>
      <div className="container my-3">
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleTextOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-outline-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-outline-primary mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-outline-primary mx-2" onClick={handleAsciClick}>
          ASCI Code Convert
        </button>
        <button className="btn btn-outline-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h4>Your Text Summary</h4>
        <p className="lead">
          Word Count: {count};
          <br />
          Character Count: {text.length}
          <br />
          Time to Read: {count / 200} minutes
        </p>
        <h3>Preview Your Text</h3>
        <p className="lead">{text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = { title: PropTypes.string.isRequired };
