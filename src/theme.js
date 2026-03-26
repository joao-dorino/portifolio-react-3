import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#232323",
    },
  },
  typography: {
    fontFamily: "Heebo, Arial, sans-serif",
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "16px",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
