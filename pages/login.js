import React, { useState } from 'react';
import { useRouter } from "next/router";
import { Avatar, Box, Grid, Button, CssBaseline, FormControlLabel, Checkbox, Container, Link, Typography, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { signin } from "../redux/actions/authentication";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FullWidth from "../layouts/fullWidth";

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          FlexyCommerce
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
const Login = props => {
  const { loadingDone, dispatch } = props;
  const router = useRouter();
  const classes = useStyles();
  const [emailValue, setEmailValue] = useState();
  const [passwordValue, setPasswordValue] = useState();
  
  console.log(loadingDone)
  if (loadingDone) {
    router.push('/')
  }
  const handleSubmitLogin = () => {
    dispatch(signin(emailValue, passwordValue));
  };

  return (
    <FullWidth>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <form className={classes.form} noValidate>
                <TextField
                    onChange={e => setEmailValue(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    onChange={e => setPasswordValue(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    onClick={handleSubmitLogin}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link href="#" variant="body2">
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
    </FullWidth>
  );
};

const mapStateToProps = state => ({
  loadingDone: state.authentication.loadingDone
});

export default connect(mapStateToProps)(Login);
