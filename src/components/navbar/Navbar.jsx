import * as React from "react";
import "./navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function ButtonAppBar() {
  const theUser = useSelector((state) => state.theUser);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/"> EAGLE INSURANCE 🦅</Link>
          </Typography>
          <Link to="register">
            <Button color="error">Register</Button>
          </Link>
          <Link to="login">
            <Button color="error">Login</Button>
          </Link>
          {theUser.name === "admin" ? (
            <Link to="allusers">
              <Button color="error">All-users</Button>
            </Link>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
