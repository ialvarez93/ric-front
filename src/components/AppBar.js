import * as React from "react";
import { AppBar } from "react-admin";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/ric-logo.svg";

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  spacer: {
    flex: 1,
  },
});

const MyAppBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar {...props}>
      <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
        id="react-admin-title"
      />
      {/* <Logo /> */}
      <img src={Logo} alt="Logo" height="50"></img>
      <span> Registro Integral de Cáncer</span>
      <span className={classes.spacer} />
    </AppBar>
  );
};

export default MyAppBar;
