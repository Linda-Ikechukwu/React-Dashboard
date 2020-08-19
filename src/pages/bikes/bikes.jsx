import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import '../../index.scss'

import SortBy from '../../components/sortby/sort.component';
import TableTab from '../../components/tableTab/tableTab.component';
import BikerApprovedTable from '../../components/tables/bikesApprovedTable';
import BikerPendingTable from '../../components/tables/bikesPendingTable';

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}));


const tab1 = <BikerApprovedTable/>;
const tab2 = <BikerPendingTable/>;

const BikerPage = () => {
    const tabTitles = ['Approved', 'Pending'];
    
    const tabContent = [tab1,tab2]
    
    const options =['All','Online','Offline'];

    const classes = useStyles();


    return(
        <main className="main-content">

        <div className={classes.toolbar} />

        <SortBy options={options} defaultOption='All' />
        <TableTab tabTitles={tabTitles} tabContent={tabContent}/>
        
        </main>
    )
}

export default BikerPage;