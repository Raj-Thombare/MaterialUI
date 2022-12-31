import React from "react";
import { Card, CardHeader, CardContent, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CardNotes = ({ note }) => {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton>
            <DeleteIcon />
          </IconButton>
        }
      />
      {note}
    </Card>
  );
};

export default CardNotes;
