import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Profile from "./Profile";
import { Router } from 'react-router-dom';
import history from "./history";

function App() {
    const [email, setEmail] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    return (
        <BrowserRouter history={history}>
            <Routes >
                <Route path="/" element={<Register email={email} setEmail={setEmail} firstName={firstName}
                                                   setFirstName={setFirstName} lastName={lastName}
                                                   setLastName={setLastName} password={password}
                                                   setPassword={setPassword} confirmPassword={confirmPassword}
                                                   setConfirmPassword={setConfirmPassword}
                />}/>
                <Route path="/profile" element={<Profile email={email} firstName={firstName} lastName={lastName}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
