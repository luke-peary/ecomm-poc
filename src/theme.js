import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = {
  palette: {
    primary: {
      "800": "#0033ca",
      "700": "#004fec",
      "600": "#006dff",
      "500": "#2395ff",
      "400": "#54b5ff",
      "300": "#7dcfff",
      "200": "#baeaff",
      "100": "#e4f7ff"
    },
    secondary: {
      "800": "#3e029e",
      "700": "#6100d7",
      "600": "#8e00ff",
      "500": "#a646ff",
      "400": "#c675ff",
      "300": "#e1a1ff",
      "200": "#f5c5ff",
      "100": "#fdebfd"
    },
    neutral: {
      "800": "#202337",
      "700": "#34394e",
      "600": "#495366",
      "500": "#657186",
      "400": "#8592a6",
      "300": "#b0bac8",
      "200": "#dadfe6",
      "100": "#ebeef2"
    },
    black: "#000",
    white: "#FFF",
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    },
    textPrimary: {
      main: "#202337",
      light: "#FFFFFF"
    },
    textHeader: {
      main: "#FFFFFF"
    }
  },
  shape: {
    borderRadius: {
      sm: "8px",
      md: "16px",
      lg: "24px"
    }
  },
  shadows: {
    sm: "0 2px 2px 0 rgba(0, 0, 0, 0.12)",
    md: "0 8px 12px 0 rgba(0, 0, 0, 0.12)",
    lg: "0 16px 32px 0 rgba(0, 0, 0, 0.16)"
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
};

export default theme;
