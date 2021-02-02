import React, {useState} from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import * as styles from "./ListingCard.styles";
import Box from "@material-ui/core/Box";


export default function ListingCard(props) {
    const [listing] = useState(props.listing);
    const classes = styles.listingCardStyles();
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const listingUrl = listing.listing_url ? listing.listing_url : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1200px-Question_mark_%28black%29.svg.png";

    return (
        <React.Fragment>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={listingUrl}
                    title={listing.listing_name}
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                        <Box fontWeight="fontWeightBold">{listing.listing_name}</Box>
                    </Typography>
                    <Typography>
                        <Box fontWeight="fontWeightBold" display="inline">Price: </Box>
                        {formatter.format(listing.listing_details.price)}
                    </Typography>
                    <Typography>
                        <Box fontWeight="fontWeightBold" display="inline">Beds: </Box>
                        {listing.listing_details.beds}
                    </Typography>
                    <Typography>
                        <Box fontWeight="fontWeightBold" display="inline">Baths: </Box>
                        {listing.listing_details.baths}
                    </Typography>
                    <Typography>
                        <Box fontWeight="fontWeightBold">Description:</Box>
                        {listing.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" href={`/listings/${listing.listing_id}`}>
                        View
                    </Button>
                </CardActions>
            </Card>
        </React.Fragment>
    )
}