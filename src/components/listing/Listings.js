import React, {useEffect, useState} from "react";
import Container from "@material-ui/core/Container";
import * as styles from "./Listings.styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListingsSearch from "./ListingsSearch";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import ListingCard from "./ListingCard";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Listings() {
    const [listings, setListings] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize] = useState(6);
    const [pageCount, setPageCount] = useState(10);
    const [listingIndex, setListingIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({});

    const classes = styles.listingsStyles();

    useEffect(() => {
        const params = filters;
        axios.get(`http://localhost:8080/v1/listings`, {params})
            .then(res => {
                console.log(filters)
                setListings(res.data)
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [filters])
    useEffect(() => {
        setPageCount(Math.ceil(listings.length / pageSize))
    }, [listings, pageSize])
    const handlePaginationChange = (event, value) => {
        setPage(value);
        setListingIndex(pageSize * (value - 1));
    }
    const handleListingsSearchChange = (value) => {
        setFilters(value);
    }

    return (
        <React.Fragment>
            <ListingsSearch onChange={handleListingsSearchChange}/>
            <CssBaseline/>
            <Container className={classes.cardGrid} maxWidth="md">
                {loading ? <CircularProgress/> :
                    <Grid container spacing={4}>
                        {listings.slice(listingIndex, listingIndex + pageSize)
                            .map((listing) => (
                                <Grid item key={listing.listing_id} xs={12} sm={6} md={4}>
                                    <ListingCard listing={listing}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                }
                <div className={ classes.pagination }>
                    <Pagination count={pageCount} page={page} onChange={handlePaginationChange}/>
                </div>
            </Container>
        </React.Fragment>
    )
}