import React, { useEffect, useState } from "react";
import { Grid, Paper, Container } from "@mui/material";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <Container>
      <Grid container>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} md={6} lg={3}>
            <Paper>{note.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;
