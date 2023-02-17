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
import {useNavigate} from 'react-router-dom';


function Register({
                      email, setEmail, firstName,
                      setFirstName, lastName,
                      setLastName, password,
                      setPassword, confirmPassword,
                      setConfirmPassword
                  }) {
    const [emailErrorText, setEmailErrorText] = React.useState("");
    const [firstNameErrorText, setFirstNameErrorText] = React.useState("");
    const [lastNameErrorText, setLastNameErrorText] = React.useState("");
    const [passwordErrorText, setPasswordErrorText] = React.useState("");
    const [confirmPasswordErrorText, setConfirmPasswordErrorText] = React.useState("");
    let navigate = useNavigate();

    const handleOnChange = e => {
        e.preventDefault();
        console.log(e.target.value, ">>>")
        if (e.target.name === "firstName") {
            setFirstName(e.target.value);
        } else if (e.target.name === "lastName") {
            setLastName(e.target.value);
        } else if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        } else {
            setConfirmPassword(e.target.value)
        }
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const nameRegex = /^[A-Za-z]+$/;
        const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})");

        if (!firstName || !nameRegex.test(firstName)) {
            console.log("No")
            setFirstNameErrorText("Please enter valid First Name");
        } else {
            console.log("Yes")
            setFirstNameErrorText("");
        }
        if (!lastName || !nameRegex.test(lastName)) {
            setLastNameErrorText("Please enter valid Last Name");
        } else {
            setLastNameErrorText("");
        }
        if (!email || !emailRegex.test(email)) {
            setEmailErrorText("Please enter valid email");
        } else {
            setEmailErrorText("");
        }
        if (!password || !passwordRegex.test(password)) {
            setPasswordErrorText("Please enter strong password");
        } else {
            setPasswordErrorText("");
        }
        if (!confirmPassword || password !== confirmPassword || !passwordRegex.test(confirmPassword)) {
            setConfirmPasswordErrorText("Please enter the same password");
        } else {
            setConfirmPasswordErrorText("");
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const nameRegex = /^[A-Za-z]+$/;
        const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})");

        if (!firstName || !nameRegex.test(firstName)) {
            setFirstNameErrorText("Please enter valid First Name");
        } else {
            setFirstNameErrorText("");
        }
        if (!lastName || !nameRegex.test(lastName)) {
            setLastNameErrorText("Please enter valid Last Name");
        } else {
            setLastNameErrorText("");
        }
        if (!email || !emailRegex.test(email)) {
            setEmailErrorText("Please enter valid email");
        } else {
            setEmailErrorText("");
        }
        if (!password || !passwordRegex.test(password)) {
            setPasswordErrorText("Please enter strong password");
        } else {
            setPasswordErrorText("");
        }
        if (!confirmPassword || password !== confirmPassword || !passwordRegex.test(confirmPassword)) {
            setConfirmPasswordErrorText("Please enter the same password");
        } else {
            setConfirmPasswordErrorText("");
        }
        if (password && confirmPassword && password === confirmPassword && email && lastName && firstName && confirmPasswordErrorText !== "") {
            navigate("/profile");
        }
    };
    return (
        <Container maxWidth="xs">
            <div style={{textAlign: "center"}}>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <form>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        type="firstName"
                        fullWidth
                        id="firstName"
                        label="First Name"
                        name="firstName"
                        value={firstName}
                        error={!!firstNameErrorText}
                        helperText={firstNameErrorText}
                        onChange={e => handleOnChange(e)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        type="lastName"
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        value={lastName}
                        error={!!lastNameErrorText}
                        helperText={lastNameErrorText}
                        onChange={e => handleOnChange(e)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        type="email"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        error={!!emailErrorText}
                        helperText={emailErrorText}
                        onChange={e => handleOnChange(e)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        error={!!passwordErrorText}
                        helperText={passwordErrorText}
                        onChange={e => handleOnChange(e)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        error={!!confirmPasswordErrorText}
                        helperText={confirmPasswordErrorText}
                        onChange={e => handleOnChange(e)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={(e) => {
                            handleSubmit(e)
                        }}
                    >
                        Register
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default Register;
