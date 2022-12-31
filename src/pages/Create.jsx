import React from "react";
import { Typography, Button, Container } from "@mui/material";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

const Create = () => {
  return (
    <Container size="sm">
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
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
