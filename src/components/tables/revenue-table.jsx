import React from 'react';

import '../../index.scss'

import DataTable from '../data-table/data-table.component';
import ViewButton from '../view-button/view-button.component';
import ActionButton from '../action-button/action-button.component';


const columnsData = [
    { id: 'tripID', label: 'Trip ID'},
    { id: 'riderID', label: 'Rider ID'},
    { id: 'riderName', label: 'Rider Name'},
    { id: 'rideTime', label: 'Trip Date'},
    { id: 'paymentType', label: 'Payment Type'},
    { id: 'tripFare', label: 'Trip Fare'},
    { id: 'discount', label: 'Discount'},
    { id: 'riderEarn', label: 'Rider Earnings'},
    { id: 'ownEarn', label: 'Own Commission'},
    { id: 'status', label: 'Payment Status'},

];

const createData = (tripID,riderID, riderName, rideTime,paymentType, tripFare,discount,riderEarn,ownEarn, status) => {
    
    return { tripID,riderID, riderName, rideTime,paymentType, tripFare,discount,riderEarn,ownEarn, status};
}

const rowsData = [
    createData('108737NT', '22390', 'Nsikan Etukudoh', '15th Jul, 2020','card','N350','N10','N100','N100','Pending'),
    createData('108737NT', '22390', 'Nsikan Etukudoh', '15th Jul, 2020','card','N350','N10','N100','N100','Pending'),
];


const RevenueTable = () => {
    const columns = columnsData;
    const rows = rowsData;

    return(
        
        <DataTable columns={columns} rows={rows} paginate/>
        
        
    )
}

export default RevenueTable ;