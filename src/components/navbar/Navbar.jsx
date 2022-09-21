import * as React from "react";
import "./navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            M&M POLICY ✈️
          </Typography>
          <Link to="register">
            <Button color="error">Register</Button>
          </Link>
          <Link to="login">
            <Button color="error">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
