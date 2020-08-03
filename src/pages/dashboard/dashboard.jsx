import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import '../../index.scss'

import '../../components/dashboard-cards/dashboard-cards.component'
import DashboardCards from '../../components/dashboard-cards/dashboard-cards.component';
import DashboardRevenue from '../../components/dashboard-revenue/dashboard-revenue.component'

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    margin:{
        marginTop:'2rem',
        marginBottom:'2rem',
    }
}));


const DashboardPage = () => {

    const classes = useStyles();

    return(
        <main className="main-content">
            <div className={classes.toolbar} />
            <DashboardCards/>
            <Grid container spacing={3} className={classes.margin}>
                <Grid item sm = {12} md = {4}></Grid>
                <Grid item sm = {12} md = {8}>
                   <DashboardRevenue/>
                </Grid>
            </Grid>
                
             
        </main>
    )
}

export default DashboardPage;