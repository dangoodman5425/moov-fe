import React from "react";
import Button from "@material-ui/core/Button";
import * as styles from "./StyledButton.styles";
import PropTypes from 'prop-types';
import CssBaseline from "@material-ui/core/CssBaseline";

function StyledButton(props) {
    const classes = styles.buttonStyles();
    let className = `${classes.primary} ${classes.base}`;
    if (props.color === 'secondary') {
        className = `${classes.secondary} ${classes.base}`
    }
    let button;
    if (props.onClick != null) {
        button = <Button variant='contained' onClick={props.onClick} className={className}>{props.label}</Button>
    } else {
        button = <Button variant='contained' href={props.href} className={className}>{props.label}</Button>
    }
    return (
        <React.Fragment>
            <CssBaseline/>
            {button}
        </React.Fragment>
    );
}

StyledButton.defaultProps = {
    href: "#",
    color: "primary",
    label: "Test",
    onClick: null,
};

StyledButton.propTypes = {
    href: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary']),
    label: PropTypes.string,
};

export default StyledButton;