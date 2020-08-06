import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import '../../index.scss'

import SortBy from '../../components/sortby/sortby.component';
import TableTab from '../../components/table-tab/table-tab.component';
import RiderApprovedTable from '../../components/tables/rider-approved-table';
import RiderPendingTable from '../../components/tables/rider-pending-table';

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}));


const tab1 = <RiderApprovedTable />;
const tab2 = <RiderPendingTable />;

const RiderPage = () => {
    const tabTitles = ['Approved', 'Pending'];

    const tabContent = [tab1, tab2]

    const options = ['Online', 'Offline'];

    const classes = useStyles();


    return (
        <main className="main-content">

            <div className={classes.toolbar} />

            <SortBy options={options} />
            <TableTab tabTitles={tabTitles} tabContent={tabContent} />

        </main>
    )
}

export default RiderPage;