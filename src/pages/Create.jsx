import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Button, Container } from "@mui/material";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: "violet",
    "&:hover": {
      background: "blue",
    },
  },

  title: {
    textDecoration: "underline",
    marginBottom: 30,
  },
});

const Create = () => {
  const classes = useStyles();
  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        className={classes.btn}
        variant="contained"
        color="primary"
        type="submit"
        endIcon={<ArrowForwardIos />}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Create;
