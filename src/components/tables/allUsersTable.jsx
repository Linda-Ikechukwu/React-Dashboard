import React, { Fragment, useState, useEffect } from 'react';


import '../../index.scss'

import DataTable from '../tableBase/tableBase.component';
import ActionButton from '../actionButton/actionButton.component';
import TableHeader from '../tableHeader/tableHeader.component';
import TableSearch from '../tableSearch/tableSearch.component';
import {UseTableFilter} from '../../utils/UseTableFilter';


const actionOptions = ['Delete'];

const columnsData = [
    { id: 'userName', label: 'User Name' },
    { id: 'email', label: 'Email Address' },
    { id: 'phone', label: 'Phone Number' },
    { id: 'address', label: 'Registered Address' },
    { id: 'dateJoined', label: 'Date Joined' },
    { id: 'actions', label: 'Actions' },
];

const createData = (userName, email, phone, address, dateJoined) => {
    const actions = <ActionButton options={actionOptions} />;
    return { userName, email, phone, address, dateJoined, actions };
}

const rowsData = [
    createData('Emmanuel Osaretin', 'emmanuel@gmail.com', '0706484833', 'No 1 Highway Street', '20 July 2000'),
    createData('Abraham Osaretin', 'abraham@gmail.com', '0706484833', 'No 1 Highjump Street', '21 July 2000')
];


const UsersTable = () => {

    const {query, handleQueryChange, filteredRows} = UseTableFilter(rowsData);
   
    const columns = columnsData;
    const rows = filteredRows;


    return (
        <>
            <TableHeader>
               <TableSearch query={query} handleQueryChange={handleQueryChange}/>
            </TableHeader>
            <DataTable columns={columns} rows={rows} paginate />
        </>

    )
}

export default UsersTable;