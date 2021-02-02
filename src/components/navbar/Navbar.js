import React, {useState} from 'react';
import LoggedInLinks from "./links/LoggedInLinks";
import LoggedOutLinks from "./links/LoggedOutLinks";
import AppBar from "@material-ui/core/AppBar";


export default function Navbar() {
    const [auth] = useState(localStorage.getItem("auth"));
    const links = auth ? <LoggedInLinks/> : <LoggedOutLinks/>;
    return (
        <AppBar position='static'>
            { links }
        </AppBar>
    )
};