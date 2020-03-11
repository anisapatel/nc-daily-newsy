import React from "react";
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";

const override = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin: 20px auto 20px auto;
  padding-top: 20px;
  padding-bottom: 20px;
  min-height: 100vh;
`;

const Loader = () => {
  return (
    <div className="sweet-loading">
      <PropagateLoader css={override} size={20} color={"#02b5af"} />
    </div>
  );
};

export default Loader;
