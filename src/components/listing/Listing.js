import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import * as styles from "./ListingCard.styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Listing() {
    const [listing, setListing] = useState({})
    const [neighborhood, setNeighborhood] = useState({});
    const [household, setHousehold] = useState({});
    const [location, setLocation] = useState({});
    const [loading, setLoading] = useState(true);
    const {listingId} = useParams();
    const classes = styles.listingCardStyles();

    useEffect(() => {
        axios.get(`http://localhost:8080/v1/listings/${listingId}`)
            .then(res => {
                setListing(res.data)
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [listingId])
    // useEffect(() => {
    //     axios.get(`http://localhost:8080/v1/neighborhoods/${listing.location.neighborhood_id}`)
    //         .then(res => {
    //             setNeighborhood(res.data)
    //         })
    //         .catch(error => console.log(error));
    // }, [listing])
    useEffect(() => {
        axios.get(`http://localhost:8080/v1/households/${listing.household_id}`)
            .then(res => {
                setHousehold(res.data)
            })
            .catch(error => console.log(error));
    }, [listing])
    useEffect(() => {
        axios.get(`http://localhost:8080/v1/locations/${listing.location_id}`)
            .then(res => {
                console.log(listing);
                setLocation(res.data)
            })
            .catch(error => console.log(error));
    }, [listing])


    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="lg">
                <Paper elevation={3}>
                    <Grid container spacing={4}>
                        <Grid item md={10}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={listing.listing_url}
                                    title={listing.listing_name}
                                />y
                            </Card>
                        </Grid>
                        <Grid item md={2}>

                            <h1>Hello World! {listingId}</h1>
                        </Grid>
                        <Grid item>
                            <h1>Testing</h1>
                        </Grid>
                    </Grid>
                </Paper>
                <Typography>
                    {listing.description}
                </Typography>
            </Container>
        </React.Fragment>
    )
}