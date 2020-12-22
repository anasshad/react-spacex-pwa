import React from "react";
import error from "./error.png";

const Error = () => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <img src={error} alt="Error" />
    <p style={{ color: "white", margin: "5% auto", fontSize: "30px" }}>
      Unable to access data
    </p>
  </div>
);

export default Error;
