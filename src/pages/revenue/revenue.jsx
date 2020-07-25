import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import '../../index.scss'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}));


const RevenuePage = () => {

    const classes = useStyles();

    return(
        <main className="main-content">
        <div className={classes.toolbar} />
        
        </main>
    )
}

export default RevenuePage;