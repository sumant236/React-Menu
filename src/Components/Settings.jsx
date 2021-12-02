import React from "react";

const Settings = (props) => {
  const { title } = props;
  const style = {
    color: "#fff",
    padding: "0.5rem 2rem",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "blue"
  };
  return <button style={style}>{title}</button>;
};

export default Settings;
