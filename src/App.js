import React from "react";
import {Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import SignIn from "./components/signin/SignIn";
import Listings from "./components/listing/Listings";
import Listing from "./components/listing/Listing";

export default function App() {
  return (
      <div className="App">
        <Navbar/>
        <Switch>
            <Route exact path='/' render={() => <Landing/>}/>
            <Route exact path='/listings' render={() => <Listings/>}/>
            <Route exact path='/sign-in' render={() => <SignIn/>}/>
            <Route exact path='/listings/:listingId' render={() => <Listing/>}/>
        </Switch>
      </div>
  )
}
