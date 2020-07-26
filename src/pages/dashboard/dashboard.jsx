import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import '../../index.scss'

import '../../components/dashboard-cards/dashboard-cards.component'
import DashboardCards from '../../components/dashboard-cards/dashboard-cards.component';

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}));


const DashboardPage = () => {

    const classes = useStyles();

    return(
        <main className="main-content">
            <div className={classes.toolbar} />
            <DashboardCards/>
             
        </main>
    )
}

export default DashboardPage;