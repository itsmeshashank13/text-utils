import React, { useState } from "react";

export default function Textform(props) {

  const handleUppercaseClick = ()=> {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event)=> {
    setText(event.target.value);
  }

  const [text, setText] = useState("");

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          <h3>{props.heading}</h3>
        </label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" placeholder="Your text goes here" rows="8" />
      </div>
      <button className="btn btn-primary" onClick={handleUppercaseClick}>Convert to Uppercase</button>
    </div>
  )
};
