import React from "react";
import { Login, LoginForm } from "react-admin";
import { withStyles } from "@material-ui/core/styles";
import Logo from "../assets/ric-logo.svg";

const styles = {
  main: { background: "#e6f4f3" },
  avatar: {
    background: { Logo },
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: 80,
  },
  icon: { display: "none" },
};

const CustomLoginForm = withStyles({
  button: { background: "#00897b" },
})(LoginForm);

const CustomLoginPage = (props) => (
  <Login loginForm={<CustomLoginForm />} {...props} />
);

export default withStyles(styles)(CustomLoginPage);
