import React from "react";

function Alert() {
  return (
    <div class="alert alert-success d-flex align-items-center" role="alert">
      <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
        <use xlink:href="#check-circle-fill" />
      </svg>
      <div>An example success alert with an icon</div>
    </div>
  );
}

export default Alert;
