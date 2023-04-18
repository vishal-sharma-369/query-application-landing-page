import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mainBackground: "#D0B6FE",
    mainBackgroundLight: "rgba(208 , 182 , 254 , 0.4)",
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    fontSize: 8,

    logo: {
      fontSize: 32,
      fontFamily: "Roboto",
      fontWeight: 700,
      color: "white",
      "@media (max-width:600px)": {
        fontSize: 24,
      },
    },

    link: {
      fontSize: 16,
      fontFamily: "Roboto",
      fontWeight: 500,
      color: "white",
      "@media (max-width:600px)": {
        fontSize: 12,
      },
    },

    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            logo: "h1",
            link: "h4",
          },
        },
      },
    },
  },
  spacing: 8,
});

export default theme;
