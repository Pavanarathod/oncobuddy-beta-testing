import { createTheme } from "@mui/material/styles";
import typography from "./typography";
import palette from "./palette";

const theam = createTheme({
  palette,
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 960,
      xl: 1300 + 24 + 24, // layout width + padding left and right,
    },
  },
  spacing: 8,
});

export default theam;
