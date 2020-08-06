import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

import '../../index.scss';

import SortBy from '../../components/sortby/sortby.component';
import TableTab from '../../components/table-tab/table-tab.component';
import RidersRidesTable from '../../components/tables/riders-rides-table';
import RidersRideTable from '../../components/tables/riders-rides-table';
import BackButton from '../../components/back-button/back-button.component'

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}));


const RidesByRiderPage = () => {
    const history = useHistory();
    const classes = useStyles();

    const handleBackButtonClick = () => {
        history.push(`/riders/`);
    }


    return (
        <main className="main-content">

            <div className={classes.toolbar} />
            <BackButton handleBackButtonClick={handleBackButtonClick}/>
            <RidersRideTable ></RidersRideTable>

        </main>
    )
}

export default RidesByRiderPage;