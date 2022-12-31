import React from "react";
import {
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CardNotes = ({ note, onDelete }) => {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton onClick={() => onDelete(note.id)}>
            <DeleteIcon />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardNotes;
