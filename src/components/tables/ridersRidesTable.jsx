/*By default the individual rider table shows trips taken by the rider on the present day.
This can then be filtered by a particular date or the sort options.
*/

import React, { Fragment, useState } from 'react';
import { useRouteMatch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import '../../index.scss'

import DataTable from '../tableBase/tableBase.component';
import StatusButton from '../statusButton/statusButton.component';
import TableHeader from '../tableHeader/tableHeader.component';
import TableSearch from '../tableSearch/tableSearch.component';
import { UseTableFilter } from '../../utils/UseTableFilter';

const columnsData = [
    { id: 'tripID', label: 'Trip ID' },
    { id: 'sender', label: 'Sender Details' },
    { id: 'receipient', label: 'Receipient Details' },
    { id: 'pickup', label: 'PickUp Address' },
    { id: 'dropoff', label: 'DropOff Address' },
    { id: 'type', label: 'Item Category' },
    { id: 'createdOn', label: 'Created On' },
    { id: 'pickupTime', label: 'PickUp Time' },
    { id: 'dropoffTime', label: 'DropOff Time' },
    { id: 'fare', label: 'Trip Fare' },
    { id: 'discount', label: 'Discount' },
    { id: 'companyEarn', label: 'Company Commission' },
    { id: 'riderEarn', label: 'Rider Earnings' },
    { id: 'status', label: 'Payment Status' },
];

const createData = (tripID, sender, receipient, pickup, dropoff, type, createdOn, pickupTime, dropoffTime, fare, discount, companyEarn, riderEarn, status) => {
    status = <StatusButton style={status}>{status}</StatusButton>
    return { tripID, sender, receipient, pickup, dropoff, type, createdOn, pickupTime, dropoffTime, fare, discount, companyEarn, riderEarn, status };
}

const rowsData = [
    createData('22390', 'Nsikan Etukudoh', 'Nsikan Osaretin', 'Mushin', 'Ojota', '15th Jul, 2020', '9:25pm', '9:30pm', 'N350', 'N10', 'N100', 'N100', 'N100', 'pending'),
    createData('22390', 'Nsikan Etukudoh', 'Nsikan Osaretin', 'Mushin', 'Ojota', '15th Jul, 2020', '9:25pm', '9:30pm', 'N350', 'N10', 'N100', 'N100', 'N100', 'pending'),
];

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    margin: {
        marginTop: '2rem',
        marginBottom: '2rem',
    },
}));


const RidersRideTable = (props) => {
    const classes = useStyles();

    let match = useRouteMatch();

    const { query, handleQueryChange, filteredRows } = UseTableFilter(rowsData);

    const columns = columnsData;
    const rows = filteredRows;

    const riderID = match.params.riderID

    return (

        <Fragment>
            <div>
                <TableHeader>
                    <Avatar />
                    <h4>Hey Rider {riderID}</h4>
                    <h4>Rating: {4.5}</h4>

                    {/*The all time earnings and pending represent how much the rider has earned since joining
                    the organisation  
                */}

                    <h4>All Time Earnings:
                       <span className="u-bold"> N450000</span>
                    </h4>
                    <h4>All Time Pending:
                       <span className="u-bold"> N450000</span>
                    </h4>

                </TableHeader>
                <TableHeader>
                    
                    {/*The total earnings and pending represent total amount earned y driver for the period 
                      the table is sorted by (i.e Yesterday, This week or a particular date.) By default, the 
                      values are for the present day.
                    */}

                    <h4>Total Earnings:
                       <span className="u-bold"> N4500</span>
                    </h4>
                    <h4>Total Pending:
                       <span className="u-bold"> N450</span>
                    </h4>
                    <TableSearch query={query} handleQueryChange={handleQueryChange} />
                </TableHeader>
                <DataTable columns={columns} rows={rows} paginate />
            </div>

        </Fragment >


    )
}

export default RidersRideTable;