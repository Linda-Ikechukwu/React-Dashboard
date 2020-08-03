import React from 'react';

import '../../index.scss'

import DataTable from '../data-table/data-table.component';
import ViewButton from '../view-button/view-button.component';
import ActionButton from '../action-button/action-button.component';

const actionOptions = ['Delete'];

const columnsData = [
    { id: 'userName', label: 'User Name'},
    { id: 'email', label: 'Email Address'},
    { id: 'phone', label: 'Phone Number'},
    { id: 'address', label: 'Registered Address'},
    { id: 'dateJoined', label: 'Date Joined'},
    { id: 'documents', label: 'Documents'},
    { id: 'actions', label: 'Actions'},
];

const createData = (userName, email, phone, address, dateJoined) => {
    const actions =<ActionButton options={actionOptions}/> ;
    return {userName, email, phone, address, dateJoined, actions};
}

const rowsData = [
    createData( 'Emmanuel Osaretin', 'emmanuel@gmail.com', '0706484833', 'No 1 Highway Street','20 July 2000'),
    createData('Abraham Osaretin', 'abraham@gmail.com', '0706484833' ,'No 1 Highway Street', '20 July 2000')
];


const UsersTable = () => {
    const columns = columnsData;
    const rows = rowsData;

    return(
        
        <DataTable columns={columns} rows={rows} paginate/>
        
        
    )
}

export default UsersTable ;