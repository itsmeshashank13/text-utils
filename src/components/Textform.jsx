import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUppercaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowercaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const capitalizeFirstLetter = (sentence) => {
    return sentence.replace(/(^\w|\.\s*\w|!\s*\w|\?\s*\w|\n\s*\w)/g, (match) =>
      match.toUpperCase()
    );
  };

  const handleCapitalizeClick = () => {
    let newText = capitalizeFirstLetter(text);
    setText(newText);
  };

  const handleClearTextbox = ()=> {
    setText("");
  };

  const handleCopy = ()=> {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "Success");
  }

  const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="row">
          <div className="col">
            <label htmlFor="myBox" className="form-label">
              <h3>{props.heading}</h3>
            </label>
          </div>
          <div className="col-auto">
            <button className="btn btn-outline-danger" onClick={handleClearTextbox}>
              <span className="ms-auto">
                Clear <MdDeleteForever />
              </span>
            </button>
          </div>
        </div>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode==='dark'?'grey':'white',
            color: props.mode==='dark'?'white':'black'
          }}
          id="myBox"
          placeholder="Your text goes here"
          rows="8"
        />
      </div>
      <button className="btn btn-primary mx-3 my-3" onClick={handleUppercaseClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary" onClick={handleLowercaseClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleCapitalizeClick}>
        Convert to SentenceCase
      </button>
      <button className="btn btn-primary" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
      <button className="btn btn-primary mx-3" onClick={handleCopy}>
        Copy Text
      </button>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h4>Your Text Summary</h4>
        <span className="mx-3">
          Number of Words: <b>{text.split(" ").filter((element)=>{return element.length !== 0}).length}</b>
        </span>
        <span className="mx-3">
          Number of Characters (without spaces):{" "}
          <b>{text.replace(/\s/g, "").length}</b>
        </span>
        <span className="mx-3">
          Number of Characters (including spaces): <b>{text.length}</b>
        </span>
        <h4 className="my-3">Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
