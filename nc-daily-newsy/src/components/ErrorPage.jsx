import React from "react";

const ErrorPage = ({ status, msg }) => {
  return (
    <p>
      Status: {status} , Message: {msg}
    </p>
  );
};

export default ErrorPage;
