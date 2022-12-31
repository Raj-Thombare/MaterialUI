import React from "react";
import {
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category === "work") {
        return "1px solid red";
      }
    },
  },
});

const CardNotes = ({ note, onDelete }) => {
  const classes = useStyles(note);

  return (
    <Card elevation={1} className={classes.test}>
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
