import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import '../../index.scss'

import SortBy from '../../components/sortby/sortby.component';
import TableTab from '../../components/table-tab/table-tab.component';
import AllRidesTable from '../../components/tables/all-rides-table';
import ScheduledRidesTable from '../../components/tables/scheduled-rides-table';
import CancelledRidesTable from '../../components/tables/cancelled-rides-table';
import OngoingRidesTable from '../../components/tables/ongoing-rides-table';

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}));


const tab1 = <AllRidesTable/>;
const tab2 = <OngoingRidesTable/>;
const tab3 = <ScheduledRidesTable/>;
const tab4 = <CancelledRidesTable/>;

const RidesPage = () => {
    const tabTitles = ['All', 'Now', 'Scheduled','Cancelled'];
    
    const tabContent = [tab1,tab2,tab3,tab4]
    
    const options =['Today','Yesterday','This Week','This Month'];

    const classes = useStyles();


    return(
        <main className="main-content">

        <div className={classes.toolbar} />

        <SortBy options={options}/>
        <TableTab tabTitles={tabTitles} tabContent={tabContent}/>
        
        </main>
    )
}

export default RidesPage;