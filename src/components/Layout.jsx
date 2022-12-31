import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
