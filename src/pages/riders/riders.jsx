import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import '../../index.scss'


const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}));


const RiderPage = () => {

    const classes = useStyles();

    return(
        <main className="main-content">
        <div className={classes.toolbar} />
        
        </main>
    )
}

export default RiderPage;