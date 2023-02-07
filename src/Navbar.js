import React from "react";
import logo from './logo.svg';
import {
    AppBar, IconButton, Toolbar, Typography,
} from "@mui/material";
import {Button, Grid, Stack} from "@mui/material";
import './index.css'
function Navbar() {
    return (
            <AppBar position="static" className="MuiAppBar-colorPrimary" >
                <Toolbar>
                    <Grid container justifyContent="space-between">
                        <Grid item >
                            <IconButton>
                                <img src={logo} className="App-logo" alt="logo" />
                            </IconButton>
                        </Grid>
                        <Grid item >
                            <div>
                                <Button>Home</Button>
                                <Button>Features</Button>
                                <Button>About Us</Button>
                                <Button>Contact</Button>
                                <Button>User</Button>
                            </div>
                        </Grid>

                    </Grid>

                </Toolbar>
            </AppBar>
    );
}
export default Navbar;