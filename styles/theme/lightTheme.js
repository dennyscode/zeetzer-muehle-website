import { createTheme } from '@mui/material/styles';
import { globalsCss } from '../globals';
import { normalizeCss } from "../normalize";


const lightTheme = createTheme({
  palette: {
    mode: 'light',
    brandPrimary: {
      light: "#13F287",
      main: "#13F287",
      dark: "#13F287",
    },
    brandPrimaryTint100: {
      light: "#93FFCB",
      main: "#93FFCB",
      dark: "#93FFCB",
      contrastText: "#fff",
    },
    brandSecondary: {
      light: "#FF6C3E",
      main: "#FF6C3E",
      dark: "#FF6C3E",
      contrastText: "#000",
    },
    brandTertiary: {
      light: "#633DFF",
      main: "#633DFF",
      dark: "#633DFF",
      contrastText: "#000",
    },

  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `${normalizeCss} ${globalsCss}`,
    },
  },

});

export default lightTheme;
