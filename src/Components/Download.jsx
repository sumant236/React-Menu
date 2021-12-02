import React from "react";

const Download = (props) => {
  const { title } = props;
  const style = {
    color: "#fff",
    padding: "0.5rem 2rem",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "#A0522D"
  };
  return <button style={style}>{title}</button>;
};

export default Download;
