import React from 'react';

import '../../index.scss'

import DataTable from '../data-table/data-table.component';
import ViewButton from '../view-button/view-button.component';
import ActionButton from '../action-button/action-button.component';

const columnsData = [
    { id: 'riderID', label: 'Rider ID'},
    { id: 'riderName', label: 'Rider Name'},
    { id: 'email', label: 'Email Address'},
    { id: 'phone', label: 'Phone Number'},
    { id: 'dateJoined', label: 'Date Joined'},
    { id: 'documents', label: 'Documents'},
    { id: 'actions', label: 'Actions'},
];

const createData = (riderID, riderName, email, phone, dateJoined) => {
    const documents = <ActionButton/>;
    const actions = <ViewButton/>;
    return { riderID, riderName, email, phone,dateJoined, documents, actions};
}

const rowsData = [
    createData(12333, 'Emmanuel Osaretin', 'emmanuel@gmail.com', 706484833 ,'20 July 2000', 'Online'),
    createData(12733, 'Abraham Osaretin', 'emmanuel@gmail.com', 706484833 ,'20 July 2000', 'Offline')
];


const RiderPendingTable = () => {
    const columns = columnsData;
    const rows = rowsData;

    return(
        
        <DataTable columns={columns} rows={rows}/>
        
        
    )
}

export default RiderPendingTable ;