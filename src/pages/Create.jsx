import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Button, Container, TextField } from "@mui/material";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const Create = () => {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (details === "") {
      setDetailsError(true);
    }
  };

  return (
    <Container size="sm">
      <form noValidate autoComplete="off" onSubmit={submitHandler}>
        <Typography
          variant="h6"
          component="h2"
          color="textSecondary"
          gutterBottom
        >
          Create a New Note
        </Typography>

        <div className={classes.field}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            label="Note Title"
            variant="outlined"
            required
            fullWidth
            error={titleError}
          />
        </div>

        <div className={classes.field}>
          <TextField
            onChange={(e) => setDetails(e.target.value)}
            label="Details"
            variant="outlined"
            multiline
            rows={4}
            required
            fullWidth
            error={detailsError}
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<ArrowForwardIos />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
