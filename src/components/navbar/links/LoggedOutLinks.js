import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../../assets/img/logo-primary.svg';
import StyledButton from "./StyledButton";


export default function SignedOutLinks() {

    return (
        <Toolbar style={{backgroundColor: 'white'}}>
            <Typography style={{ flex: 1 }}>
                <img src={logo} alt='logo'/>
            </Typography>
            <StyledButton href='/login' color='primary' label='Login'/>
            <StyledButton href='/sign-up' color='primary' label='Sign Up'/>
        </Toolbar>
    )
};
