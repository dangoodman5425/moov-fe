import React, {useEffect, useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import PriceSlider from "./PriceSlider";
import * as styles from './ListingsSearch.style';
import StyledButton from "../navbar/links/StyledButton";

const beds = [
    {
        'value': 0,
        'label': '0',
        'aria_label': 'left-aligned',
    },
    {
        'value': 1,
        'label': '1',
        'aria_label': 'center',
    },
    {
        'value': 2,
        'label': '2',
        'aria_label': 'right-aligned',
    },
    {
        'value': 3,
        'label': '3',
        'aria_label': 'justified',
    },
    {
        'value': null,
        'label': '4+',
        'aria_label': 'justified',
    },
]
const baths = [
    {
        'value': 1,
        'label': '1',
        'aria_label': 'left-aligned',
    },
    {
        'value': 2,
        'label': '2',
        'aria_label': 'center',
    },
    {
        'value': 3,
        'label': '3',
        'aria_label': 'right-aligned',
    },
    {
        'value': 4,
        'label': '4',
        'aria_label': 'justified',
    },
    {
        'value': null,
        'label': '5+',
        'aria_label': 'justified',
    },
]


export default function ListingsSearch(props) {
    const [neighborhoods, setNeighborhoods] = useState([]);
    const [currentNeighborhood, setCurrentNeighborhood] = useState('none');
    const [currentBed, setCurrentBed] = React.useState(beds[0].value);
    const [currentBath, setCurrentBath] = React.useState(baths[0].value);
    const [priceRange, setPriceRange] = React.useState([500, 8000]);

    const classes = styles.listingsSearchStyles();

    const handleBedSelect = (event, newBed) => {
        setCurrentBed(newBed);
    };
    const handleBathSelect = (event, newBath) => {
        setCurrentBath(newBath);
    };
    const handleNeighborhoodSelect = (event, newNeighborhood) => {
        setCurrentNeighborhood(newNeighborhood.props.value);
    };
    const handlePriceSelect = (event, value) => {
        setPriceRange(value);
    }
    const handleSubmit = () => {
        props.onChange({
                'min_beds': currentBed,
                'min_baths': currentBath,
                'min_price': priceRange[0],
                'max_price': priceRange[1],
            }
        )
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/v1/neighborhoods`)
            .then(res => {
                setNeighborhoods(res.data)
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <React.Fragment>
            <CssBaseline/>
            <section className={ classes.container }>
                <Container maxWidth='lg' style={{ paddingTop: '0.5rem' }}>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item sm={2}>
                                <ToggleButtonGroup
                                    value={currentBed}
                                    exclusive
                                    onChange={handleBedSelect}
                                    aria-label="text alignment"
                                >
                                    {beds.map((bed) => (
                                        <ToggleButton value={bed.value} aria-label={bed.aria_label}>
                                            <Typography fontWeight="fontWeightBold">
                                                {bed.label}
                                            </Typography>
                                        </ToggleButton>
                                    ))}
                                </ToggleButtonGroup>
                            </Grid>
                            <Grid item sm={2}>
                                <ToggleButtonGroup
                                    value={currentBath}
                                    exclusive
                                    onChange={handleBathSelect}
                                    aria-label="text alignment"
                                >
                                    {baths.map((bath) => (
                                        <ToggleButton value={bath.value} aria-label={bath.aria_label}>
                                            <Typography fontWeight="fontWeightBold">
                                                {bath.label}
                                            </Typography>
                                        </ToggleButton>
                                    ))}
                                </ToggleButtonGroup>
                            </Grid>
                            <Grid item sm={4}>
                                <PriceSlider onChange={handlePriceSelect}/>
                            </Grid>
                            <Grid item sm={2}>
                                <Select
                                    labelId="neighborhood-select-label"
                                    id="neighborhood-select"
                                    value={currentNeighborhood}
                                    defaultValue='none'
                                    onChange={handleNeighborhoodSelect}
                                >
                                    <MenuItem value='none' disabled>
                                        Neighborhood
                                    </MenuItem>
                                    {neighborhoods.map((neighborhood) => (
                                    <MenuItem value={neighborhood.neighborhood_id}>
                                        {neighborhood.neighborhood_name}
                                    </MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                            <Grid item sm={2}>
                                <StyledButton color='primary' label='Search' onClick={() => handleSubmit()}/>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </section>
        </React.Fragment>
    )
}