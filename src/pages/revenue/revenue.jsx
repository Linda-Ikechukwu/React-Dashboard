import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import '../../index.scss'

import SortBy from '../../components/sortby/sort.component';
import SelectDatePicker from '../../components/datePicker/datePicker';
import RevenueTable from '../../components/tables/revenueTable';


const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,

    topbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    revenuetable:{
        marginTop: '3rem',
    }
}));


const RevenuePage = () => {

    const options = ['Today', 'Yesterday', 'This Week', 'This Month', '3 Months'];

    const classes = useStyles();


    return (
        <main className="main-content">

            <div className={classes.toolbar} />

            <div className={classes.topbar}>
                <SortBy options={options} defaultOption='Today' />
                <SelectDatePicker />
            </div>
            
            <div className={classes.revenuetable}>
                <RevenueTable />
            </div>
            

        </main>
    )
}

export default RevenuePage;