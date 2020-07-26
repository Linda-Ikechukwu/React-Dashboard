import React, { Fragment } from 'react';
import { ReactComponent as EllipseTop } from '../../assets/svgs/login/ellipse-top.svg';
import { ReactComponent as EllipseDown } from '../../assets/svgs/login/ellipse-down.svg';

import { makeStyles } from '@material-ui/core/styles';

import {
    Grid,
    Box,
    TextField,
    Button
} from '@material-ui/core';


const useStyles = makeStyles({
    container: {
        width: '100vw',
        height: '100vh'
    },
    item: {
        position: 'relative',
        height: '100vh',
        overflow:'hidden'

    },
    ellipseTop:{
      position:'absolute',
      top:'-50px',
      left:'-20px',
    },
    ellipseDown:{
        position:'absolute',
        bottom:'-20px',
        right:'-135px',

    },
    flexbox:{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    formbox: {
        width: '320px',
        '& h2': {
            color: '#00567A'
        }

    },
    textfield: {
        marginBottom: '41px',
        '& label': {
            marginTop: '-7px'
        },
        '& div': {
            height: '41px',
            borderRadius: '4px',
        }

    },
    button: {
        width: '320px',
        height: '48px',
        background: '#00567A',
        borderRadius: '4px',
        fontSize: '20px'
    }
});


const LoginPage = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.container} container direction="row" spacing={0}>
            <Grid className={classes.item} item container direction="row" xs={6}>
                <EllipseTop className={classes.ellipseTop}></EllipseTop>
                <Box className={classes.flexbox}>
                    <Box className={classes.formbox}>
                        <h2 color="#00567A">Admin Login</h2>
                        <p>Please enter your credentials to proceed</p>
                        <form>
                            <TextField className={classes.textfield}
                                fullWidth
                                type="email"
                                id="email"
                                label="Email Address"
                                placeholder="Email Address"
                                variant="outlined"
                            />
                            <TextField className={classes.textfield}
                                fullWidth
                                type="password"
                                id="password"
                                label="Password"
                                placeholder="Password"
                                variant="outlined"
                            />
                            <Button className={classes.button} variant="contained" color="primary" disableElevation>
                                Login
                            </Button>

                        </form>
                    </Box>
                </Box>
                <EllipseDown className={classes.ellipseDown}></EllipseDown>
            </Grid>
            <Grid item xs={6}></Grid>

        </Grid>
    )

}

export default LoginPage;