import React, {useState} from "react";
import LoggedInLanding from "./LoggedInLanding";
import LoggedOutLanding from "./LoggedOutLanding";

export default function Landing() {
    const { auth } = useState(localStorage.getItem("auth"));
    const landing = auth ? <LoggedInLanding/> : <LoggedOutLanding/>;
    return (
        <div>{landing}</div>
    )
};
