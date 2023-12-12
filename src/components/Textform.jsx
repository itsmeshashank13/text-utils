import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUppercaseClick = ()=> {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowercaseClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event)=> {
    setText(event.target.value);
  }

  return (
    <>
    <div className="container">
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          <h3>{props.heading}</h3>
        </label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" placeholder="Your text goes here" rows="8" />
      </div>
      <button className="btn btn-primary" onClick={handleUppercaseClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLowercaseClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
      <h3>Your Text Summary</h3>
      <span className="mx-3">Number of Words: <b></b></span>
      <span className="mx-3">Number of Characters: <b>{text.replace(/\s/g, "").length}</b></span>
      <span className="mx-3">Number of Sentences: <b>{text.length}</b></span>
    </div>
    </>
  )
};
