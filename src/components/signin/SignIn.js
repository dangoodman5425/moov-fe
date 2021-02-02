import React from 'react';
import * as styles from './SignIn.styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Copyright from "./Copyright";
import {withStyles} from "@material-ui/styles";

const SigninTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
})(TextField);

export default function SignIn() {
    const classes = styles.signInStyles();
    return (
        <React.Fragment>
            <section className={ classes.background }>
                <Container maxWidth='xs' component='main' className={ classes.container }>
                    <CssBaseline/>
                    <div className={ classes.paper }>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon style={{ color: 'black' }}/>
                        </Avatar>
                        <Typography component='h1' variant='h3' className={ classes.title }>
                            Login
                        </Typography>
                        <form noValidate autoComplete='off' className={ classes.form }>
                            <SigninTextField
                                className={ classes.input }
                                variant='outlined'
                                type='email'
                                id='email'
                                label='Email'
                                margin='normal'
                                fullWidth
                                required
                            />
                            <SigninTextField
                                className={ classes.input }
                                variant='outlined'
                                type='password'
                                id='password'
                                label='Password'
                                margin='normal'
                                fullWidth
                                required
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="white" className={ classes.checkBox }/>}
                                label={<Typography style={{ color: 'white' }}>Remember me</Typography>}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2" style={{ color: 'white' }}>
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/sign-up" variant="body2" style={{ color: 'white' }}>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={8}>
                        <Copyright />
                    </Box>
                </Container>
            </section>
        </React.Fragment>
    );
}