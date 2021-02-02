import React from 'react';
import Slider from "@material-ui/core/Slider";
import {withStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";


const PrettoSlider = withStyles({
    root: {
        color: 'black',
        height: 8,
        marginTop: 15,
    },
    thumb: {
        height: 12,
        width: 12,
        backgroundColor: 'black',
        border: '2px solid currentColor',
        marginTop: -3,
        marginLeft: -9,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-150%)',
        fontWeight: "bold",
        fontSize: "0.6rem",
        '& *': {
            // border: '2px solid white',
            // color: '#000',
        },
    },
    track: {
        height: 6,
        borderRadius: 3,
    },
    rail: {
        height: 6,
        borderRadius: 3,
    },
    markLabel: {
        fontWeight: "bold",
        fontSize: "0.7rem",
    },
})(Slider);

export default function PriceSlider(props) {
    const [priceRange, setPriceRange] = React.useState([500, 8000])

    const handleChange = (event, value) => {
        setPriceRange(value);
        props.onChange(event, value);
    };

    return(
        <React.Fragment>
            <CssBaseline/>
            <PrettoSlider
                defaultValue={priceRange}
                max={8000}
                min={500}
                step={100}
                aria-labelledby="range-slider"
                valueLabelFormat={e => `$${e}`}
                onChange={handleChange}
                valueLabelDisplay="on"
            />
        </React.Fragment>
    )
}