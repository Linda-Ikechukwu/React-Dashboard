import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import '../../index.scss'

import SortBy from '../../components/sortby/sortby.component'

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}));


const UsersPage = () => {

    const options =['None Selected']

    const classes = useStyles();

    return(
        <main className="main-content">

        <div className={classes.toolbar} />

        <SortBy options={options}/>
          
        </main>
    )
}

export default UsersPage;