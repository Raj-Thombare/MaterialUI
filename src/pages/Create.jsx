import React from "react";
import { Typography, Button, ButtonGroup, Container } from "@mui/material";

const Create = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>

      {/* <ButtonGroup color="secondary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}

      {/* <Typography
        variant="h6"
        component="h2"
        color="textPrimary"
        noWrap
        gutterBottom
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ipsam
        dolore quaerat, deserunt qui ad vero vitae iure cumque consectetur
        corrupti possimus aliquid alias eligendi veniam blanditiis et eos quo
        pariatur. Doloremque quod debitis soluta ut molestias blanditiis nobis
        harum quisquam? Dicta corrupti cupiditate quod harum maiores blanditiis!
        Aliquid dicta exercitationem itaque! Quam, non facere. Rem porro nostrum
        sit sequi odio repellat molestias labore, excepturi totam consectetur
        nam eius facere esse pariatur eaque reiciendis neque eos laboriosam
        eveniet aut perferendis minima laudantium, accusantium ad! Est nesciunt
        inventore, quasi tenetur odio ducimus quidem eveniet aperiam temporibus
        dicta consequatur voluptatem quod corporis.
      </Typography> */}
    </Container>
  );
};

export default Create;
