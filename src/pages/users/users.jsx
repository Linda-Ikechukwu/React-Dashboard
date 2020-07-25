import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import '../../index.scss'

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}));


const UsersPage = () => {

    const classes = useStyles();

    return(
        <main className="main-content">
        <div className={classes.toolbar} />
          <h1>UsersPage</h1>
        </main>
    )
}

export default UsersPage;