import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import '../../index.scss'

import SortBy from '../../components/sortBy/sortBy.component';
import TableTab from '../../components/tableTab/tableTab.component';
import RiderApprovedTable from '../../components/tables/riderApprovedTable';
import RiderPendingTable from '../../components/tables/riderPendingTable';

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}));


const tab1 = <RiderApprovedTable />;
const tab2 = <RiderPendingTable />;

const RiderPage = () => {
    const tabTitles = ['Approved', 'Pending'];

    const tabContent = [tab1, tab2]

    const options = ['All','Online', 'Offline'];
    

    const classes = useStyles();


    return (
        <main className="main-content">

            <div className={classes.toolbar} />

            <SortBy options={options} defaultOption='All' />
            <TableTab tabTitles={tabTitles} tabContent={tabContent} />

        </main>
    )
}

export default RiderPage;