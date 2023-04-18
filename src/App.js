import { useTheme } from "@emotion/react";
import "./App.css";
import BackgroundImage from "./svgIcons/backgroundp.png";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Appbar from "./components/Appbar";
import Bandi from "./svgIcons/bandi.png";
import Stack from "@mui/material/Stack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailIcon from "@mui/icons-material/Mail";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  const theme = useTheme();
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Box
        sx={{
          width: "100%",
          height: "80%",
          overflow: "hidden",
          position: "fixed",
          zIndex: -2,
        }}
      >
        <img
          src={BackgroundImage}
          alt=""
          style={{ width: "100%", height: "80%" }}
        />
      </Box>
      <Appbar />
      <Container>
        <Paper
          elevation={2}
          sx={{
            zIndex: 2,
            color: "black",
            mt: 12,
            width: "80%",
            mx: "auto",
            borderRadius: 2,
            position: "relative",
            boxShadow: "0px 16px 32px rgba(208 , 182 , 254 , 0.4)",
          }}
        >
          <Grid container spacing={2} sx={{ px: 6 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="logo"
                color="#D0B6FE"
                mt={2}
                component={"h1"}
              >
                Get In Touch
              </Typography>
              <Typography variant="link" color="black" mt={2} component="h4">
                We are here for you? How can we help.
              </Typography>
              <TextField
                id="filled-basic"
                label="Enter your name"
                variant="filled"
                sx={{
                  display: "block",
                  mb: 3,
                  mt: 3,
                  bgcolor: "rgba(208 , 182 , 254 , 0.4)",
                }}
                InputProps={{
                  style: {
                    fontSize: "12px",
                  },
                }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="Enter your password"
                variant="filled"
                fullWidth
                fontSize="30px"
                InputProps={{
                  style: {
                    fontSize: "12px",
                  },
                }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                sx={{
                  display: "block",
                  mb: 3,
                  bgcolor: "rgba(208 , 182 , 254 , 0.4)",
                }}
              />
              <TextField
                label="Tell us about your doubts?"
                variant="filled"
                fullWidth
                InputProps={{
                  style: {
                    fontSize: "12px",
                  },
                }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                sx={{
                  display: "block",
                  mb: 3,
                  fontSize: "12px",
                  bgcolor: "rgba(208 , 182 , 254 , 0.4)",
                }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  height: "40px",
                  fontSize: "12px",
                  bgcolor: "#D0B6FE",
                  "&:hover": { bgcolor: "#D0B6FE" },
                }}
              >
                Contained
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "max-content",
                  height: "max-content",
                  ml: "auto",
                  mt: 4,
                }}
              >
                <img src={Bandi} alt="" />
              </Box>
              <Stack
                mt={2}
                ml={"auto"}
                width={"max-content"}
                mr={6}
                spacing={2}
                mb={6}
              >
                <Stack direction="row" alignItems={"center"} spacing={2}>
                  <LocationOnIcon
                    sx={{
                      border: "2px solid #D0B6FE",
                      color: "#D0B6FE",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      fontSize: "12px",
                      padding: "5px",
                    }}
                  />
                  <Typography variant="link" color="black">
                    Hazratbal, NIT Srinagar
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems={"center"} spacing={2}>
                  <PhoneEnabledIcon
                    sx={{
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      fontSize: "12px",
                      padding: "5px",
                      border: "2px solid #D0B6FE",
                      color: "#D0B6FE",
                    }}
                  />
                  <Typography variant="link" color="black">
                    Hazratbal, NIT Srinagar
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems={"center"} spacing={2}>
                  <MailIcon
                    sx={{
                      border: "2px solid #D0B6FE",
                      color: "#D0B6FE",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      fontSize: "12px",
                      padding: "5px",
                    }}
                  />
                  <Typography variant="link" color="black">
                    Hazratbal, NIT Srinagar
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
