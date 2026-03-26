import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#232323'
        },
    },
    typography: {
        fontFamily: "Heebo"

    }
});

theme = responsiveFontSizes(theme);

export default theme;
