import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
      primary: {
        main: '#FFF'
      }, 
      text: {
        secondary: '#FFF',
    }
  }
}));

export default theme;