import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import '../../index.scss'

import SortBy from '../../components/sortby/sort.component';
import TableTab from '../../components/tableTab/tableTab.component';
import AllRidesTable from '../../components/tables/allRidesTable';
import ScheduledRidesTable from '../../components/tables/scheduledRidesTable';
import CancelledRidesTable from '../../components/tables/cancelledRidesTable';
import OngoingRidesTable from '../../components/tables/ongoingRidesTable';

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

        <SortBy options={options} defaultOption='Today' />
        <TableTab tabTitles={tabTitles} tabContent={tabContent}/>
        
        </main>
    )
}

export default RidesPage;