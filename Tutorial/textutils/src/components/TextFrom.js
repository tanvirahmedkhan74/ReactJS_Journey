import React, {useState} from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked");
    setText(text.toUpperCase());
  }

  const handleTextOnChange = (event)=>{
    //console.log("Onchange was Done");
    setText(event.target.value);  // event.target.value is the value of the textarea at the time of the event
  }

  const [text, setText] = useState("Enter some text here"); // useState is a hook which returns an array of two elements - the first element is the state variable and the second element is the function to update the state variable

  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h5>{props.title}</h5>
          </label>
          <textarea className="form-control" value={text} onChange={handleTextOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className = "btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
      </div>
    </>
  );
}

TextForm.propTypes = { title: PropTypes.string.isRequired };
