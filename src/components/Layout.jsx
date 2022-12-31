import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";

const drawerWidth = 240;

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <Typography variant="h5">Rakaa's Notes</Typography>
      </Drawer>
      <div className={classes.page}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
