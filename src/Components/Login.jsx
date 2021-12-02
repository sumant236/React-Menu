import React from "react";

const Login = (props) => {
  const { title } = props;
  const style = {
    color: "#fff",
    padding: "0.5rem 2rem",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "yellow"
  };
  return <button style={style}>{title}</button>;
};

export default Login;
