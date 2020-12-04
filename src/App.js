import React from "react";
import {
  Button,
  Grid,
  TextField,
  InputAdornment,
  CssBaseline
} from "@material-ui/core";
import { AccountCircle, LockRounded } from "@material-ui/icons";

import img from "./pexels.jpeg";
import logo from "./Puma-Logo.png";

import "./styles.css";

export default function App() {
  return (
    <div>
      <CssBaseline />
      <Grid container direction="row" style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <img
            src={img}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="puma"
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justify="space-between"
          style={{ padding: 10 }}
        >
          <div />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 400,
              minWidth: 300
            }}
          >
            <Grid container justify="center">
              <img src={logo} width={200} alt="logo" />
            </Grid>
            <TextField
              type="text"
              label="Username"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              type="password"
              label="Password"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockRounded />
                  </InputAdornment>
                )
              }}
            />
            <div style={{ height: 20 }} />
            <Button color="primary" variant="contained">
              Login
            </Button>
            <div style={{ height: 20 }} />
            <Button>Interested in joining?</Button>
          </div>
          <div />
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Button color="primary">Go to community page</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">Forgot Password</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
