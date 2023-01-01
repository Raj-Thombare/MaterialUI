import React, { useEffect, useState } from "react";
import { Grid, Container } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
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
      <Masonry columns={4} spacing={2}>
        {notes.map((note) => (
          <div>
            <CardNotes note={note} onDelete={deleteNoteHandler} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
