import {makeStyles} from '@material-ui/core/styles';
import Background from '../../assets/img/signin-bg.png';

export const signInStyles = makeStyles((theme) => ({
    container: {
        marginTop: '8rem',
        background: 'rgba(0,0,0,0.8)',
        height: '26rem',
    },
    background: {
        width: '100%',
        height: '800',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        /* Full height */
        minHeight: '100vh',
        overflow: 'hidden'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    input: {
        color: 'white',
        background: 'rgba(255,255,255,0.2)',
        borderWidth: "1px",
        borderColor: "white !important"
    },
    title: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'Oswald sans-serif',
        fontWeight: 'bold',
        color: 'white',
        fontSize: '2rem'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#FFF500',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#FFF500',
        color: 'black'
    },
    checkBox: {
        color: 'white',
        '&$checked': {
            color: 'white',
        },
    },
}));
