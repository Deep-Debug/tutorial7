import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography
} from "@mui/material";

function Profile({firstName,lastName,email}) {
    return (
        <Container  maxWidth="xs">
            <div style={{textAlign : "center"}}>
                <Typography component="h1" variant="h5">
                    Profile Details
                </Typography>
                <Typography component="h1" variant="h5">
                    First Name:- {firstName}
                </Typography>
                <Typography component="h1" variant="h5">
                    Last Name:- {lastName}
                </Typography>
                <Typography component="h1" variant="h5">
                    Email:- {email}
                </Typography>
            </div>
        </Container>
    );
}

export default Profile;
