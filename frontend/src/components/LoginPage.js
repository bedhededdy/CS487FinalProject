import React, { useState } from 'react';
import { Grid, Button, Typography, TextField } from "@material-ui/core";
//import { BrowserRouter as Router, Routes, Route, useNavigate, Link, Navigate } from 'react-router-dom';

export default function LoginPage(props) {
    /* The login page will either take a username and password which we can use
     * to get the user's steamID (via a Steam API call we will make on the backend)
     * or the user can just enter their steamID directly */
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');

    const [btnDisabled, setBtnDisabled] = useState(false);

    const handleUsernameTextFieldChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePwdTextFieldChange = (e) => {
        setPwd(e.target.value);
    }

    const handleLoginButtonPressed = async () => {
        // Prevent user from overloading us with requests
        setBtnDisabled(true);
        setBtnDisabled(false);
    }

    // IF THIS IS BROKEN, WRAP IT IN A DIV
    return (
        <Grid container spacing={1} align='center'>
            <Grid item xs={12} >
                <Typography variant='h6' component='h6'>
                    Login to your Student Assist account
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                label='Username'
                placeholder='Enter your username'
                value={username}
                variant='outlined'
                onChange={handleUsernameTextFieldChange} />
            </Grid>
            <Grid item xs={12}>
                <TextField
                label='Password'
                placeholder='Enter your password'
                value={pwd}
                variant='outlined'
                onChange={handlePwdTextFieldChange} />
            </Grid>
            <Grid item xs={12}>
                <Button disabled={btnDisabled} variant='contained' color='primary' onClick={handleLoginButtonPressed}>
                    Login
                </Button>
            </Grid>
        </Grid>
    );
}
