import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

import '../../index.scss';

import SortBy from '../../components/sortBy/sortBy.component';
import TableTab from '../../components/tableTab/tableTab.component';
import RidersRideTable from '../../components/tables/ridersRidesTable';
import BackButton from '../../components/backButton/backButton.component'
import SelectDatePicker from '../../components/datePicker/datePicker';

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,

    topbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
}));


const RidesByRiderPage = () => {

    const options = ['Today', 'Yesterday', 'This Week', 'This Month', '3 Months'];

    const history = useHistory();
    const classes = useStyles();

    const handleBackButtonClick = () => {
        history.push(`/riders/`);
    }


    return (
        <main className="main-content">

            <div className={classes.toolbar} />

            <div className={classes.topbar}>
                <SortBy options={options} defaultOption='Today' />
                <SelectDatePicker />
            </div>

            <BackButton handleBackButtonClick={handleBackButtonClick}/>

            <RidersRideTable ></RidersRideTable>

        </main>
    )
}

export default RidesByRiderPage;