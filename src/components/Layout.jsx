import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
} from "@mui/material";

import { SubjectOutlined, AddCircleOutlineOutlined } from "@mui/icons-material";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      // padding: 20,
      padding: theme.spacing(3),
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
    active: {
      background: "#4f4f4",
    },
    title: {
      // padding: 20,
      padding: theme.spacing(2),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
  };
});

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const classes = useStyles();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="primary" />,
      path: "/",
    },
    {
      text: "Add Note",
      icon: <AddCircleOutlineOutlined color="primary" />,
      path: "/create",
    },
  ];

  const today = new Date().toUTCString().slice(5, 16);

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.appBar}
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        }}
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <Typography className={classes.date}>{today}</Typography>
          <Typography>Rakaa</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Rakaa's Notes
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.text}
              onClick={() => navigate(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
