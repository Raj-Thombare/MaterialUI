import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

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
  const [category, setCategory] = useState("todos");
  const navigate = useNavigate();

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

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate("/notes"));
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

      <FormControl className={classes.field}>
        <FormLabel>Note Catergory</FormLabel>
        <RadioGroup
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <FormControlLabel value="money" control={<Radio />} label="Money" />
          <FormControlLabel value="todos" control={<Radio />} label="Todos" />
          <FormControlLabel
            value="reminder"
            control={<Radio />}
            label="Reminder"
          />
          <FormControlLabel value="work" control={<Radio />} label="Work" />
        </RadioGroup>
      </FormControl>
    </Container>
  );
};

export default Create;
