// import { createTheme } from "@mui/system";
import { createTheme } from "@mui/material";
import { yellow } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      light: yellow[100],
      main: yellow[500],
      dark: yellow[900],
    },
    secondary: {
      main: "#07ffc1",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
