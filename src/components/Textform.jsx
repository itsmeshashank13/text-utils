import React from "react";

export default function Textform(props) {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="myBox" class="form-label"><h4>{props.heading}</h4></label>
        <textarea className="form-control" id="myBox" rows="8" />
      </div>
      <button className="btn btn-primary">Convert to Uppercase</button>
    </div>
  );
}
