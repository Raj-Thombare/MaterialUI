import React, { useEffect, useState } from "react";
import { Grid, Paper, Container } from "@mui/material";
import CardNotes from "../components/CardNotes";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const deleteNoteHandler = (id) => {
    fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });

    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} md={6} lg={3}>
            <CardNotes note={note} onDelete={deleteNoteHandler} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;
