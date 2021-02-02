import { makeStyles } from "@material-ui/core/styles";

export const buttonStyles = makeStyles({
    primary: {
        background: 'black',
        color: 'white',
    },
    secondary: {
        background: '#FFF500',
        color: 'black',
    },
    base: {
        fontFamily: 'NeueFrontPage, serif',
        fontWeight: 'bold',
        borderRadius: '0',
        boxShadow: '1px 2px #888888',
        margin: '5px',
        height: '80%',
        // width: '12rem'
    }
});