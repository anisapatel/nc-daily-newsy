import React from "react";

const ErrorPage = ({ status, msg }) => {
  return (
    <span>
      <p>{status ? status : 404}</p>
      <p>{msg ? msg : "Ooops page is not found!"}</p>
    </span>
  );
};

export default ErrorPage;
