import React from "react";
import {
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import { yellow, green, pink, blue } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category == "work") {
        return yellow[700];
      }
      if (note.category == "money") {
        return green[500];
      }
      if (note.category == "todos") {
        return pink[500];
      }
      return blue[500];
    },
  },
});

const CardNotes = ({ note, onDelete }) => {
  const classes = useStyles(note);

  return (
    <Card elevation={1}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
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
