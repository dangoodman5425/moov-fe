import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Toolbar from '@material-ui/core/Toolbar';
import logo from "../../../assets/img/logo-secondary.png";
import * as styles from './Links.styles';
import Typography from '@material-ui/core/Typography';
import StyledButton from "./StyledButton";
import Link from "@material-ui/core/Link";

export default function SignedInLinks() {
    const [actorId] = useState(localStorage.getItem('actorId'));
    const classes = styles.linkStyles();
    return (
        <Toolbar className={`${classes.loggedInRoot}`}>
            <Link to='/' style={{ marginLeft: '1rem', marginRight: '2rem' }}>
                <img src={logo} alt='logo'/>
            </Link>
            <StyledButton href='/search' color='secondary' label='Search'/>
            <Typography style={{ flex: 1 }}>
                <StyledButton href='/list' color='secondary' label='List your unit'/>
            </Typography>
            <Button className={`${classes.primaryLink}`} href={`/dashboard/${actorId}`}>Dashboard</Button>
            <Button className={`${classes.primaryLink}`} href={`/dashboard/${actorId}/listings`}>My Listings</Button>
            <Button className={`${classes.primaryLink}`} href={`/dashboard/${actorId}/schedule`}>Schedule</Button>
            <Button className={`${classes.primaryLink}`} href={`/dashboard/${actorId}/households`}>Households</Button>
            <Button className={`${classes.primaryLink}`} href={`/dashboard/${actorId}/messages`}>Messages</Button>
        </Toolbar>
    )
};