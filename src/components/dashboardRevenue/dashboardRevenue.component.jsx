import React, { PureComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import RevenueChart from '../revenueChart/revenueChart.component'

const useStyles = makeStyles((theme) => ({
    header: {
      display: 'flex',
      padding:'1rem',
      paddingLeft:'2rem',
      alignItems:'center',
    },
    heading1: {
        color: '#00567A',
    },
    heading2: {
       color: '#99CFE5',
       padding:'1rem',
    },
    root: {
      padding: '1rem',
    },
}));

const DashboardRevenue = () => {
    const classes = useStyles();

    return (
       <Paper elevation={0} className={classes.root}>
          <div className={classes.header}>
              <h4>Total Revenue</h4>
          </div>
          <Divider/>
          <div className={classes.header}>
              <h3 className={classes.heading1}>N1,678,799.64</h3>
              <h4 className={classes.heading2}>Earned</h4>
          </div>
          <RevenueChart/>
       </Paper>
    )
}

export default DashboardRevenue;