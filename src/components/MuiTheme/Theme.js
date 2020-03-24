import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  props:{
    MuiCssBaseline: {
      '@global': {
        'h1': "20px"
      },
    },
    MuiTypography: {
      variantMapping: {
        h1: "h1",
      },
    },
    MuiButtonBase: {
      disableRipple: false
    }
  },
  palette: {
    primary: {
      main: "#34495E"
    },
    secondary: {
      main: "#1ABC9C"
    },
    success: {
      main: "#71B7E6"
    },
    text: {
      primary: "#34495E",
      secondary: "#BDBDBD"
    }
  },
  typography: {
    fontFamily: '"proxima-nova", sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 1000,
    primary: "red"
  }
});

export default theme;
