import React from "react";

const Join = (props) => {
  const { title } = props;
  const style = {
    color: "#fff",
    padding: "0.5rem 2rem",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "skyblue"
  };
  return <button style={style}>{title}</button>;
};

export default Join;
