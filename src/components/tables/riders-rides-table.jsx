import React, { Fragment, useState } from 'react';
import { useRouteMatch } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import '../../index.scss'

import DataTable from '../data-table/data-table.component';
import StatusButton from '../status-button/status-button.component'

const columnsData = [
    { id: 'tripID', label: 'Trip ID' },
    { id: 'sender', label: 'Sender Details' },
    { id: 'receipient', label: 'Receipient Details' },
    { id: 'pickup', label: 'PickUp Address' },
    { id: 'dropoff', label: 'DropOff Address' },
    { id: 'type', label: 'Item Category' },
    { id: 'fare', label: 'Trip Fare' },
    { id: 'createdOn', label: 'Created On' },
    { id: 'pickupTime', label: 'PickUp Time' },
    { id: 'dropoffTime', label: 'DropOff Time' },
    { id: 'status', label: 'Status' },
];

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    margin: {
        marginTop: '2rem',
        marginBottom: '2rem',
    },
    header: {
        display: 'flex',
        padding:'2rem',
        alignItems:'center',
        backgroundColor:'#ffffff',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',

        '& > *':{
            marginRight: '1rem',
        }
    },
}));


const RidersRideTable = (props) => {
    const classes = useStyles();

    let match = useRouteMatch();
    const columns = columnsData;

    const riderID = match.params.riderID

    return (

        <Fragment>
            <div>
                <div className={classes.header}>
                    <Avatar/>
                   <h4>Hey Rider {riderID}</h4>
                </div>
                <Divider />
                <DataTable columns={columns}  rows={[]}  paginate />
            </div>
          
       </Fragment >
        
        
    )
}

export default RidersRideTable;