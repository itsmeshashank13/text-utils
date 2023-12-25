import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && <div class={`alert alert-success alert-dismissible fade show`} role="alert">
    {capitalize(props.alert.message)}
  </div>
  );
}

export default Alert;
