import React from 'react';

import '../../index.scss'

import DataTable from '../tableBase/tableBase.component';
import ViewButton from '../viewButton/viewButton.component';
import ActionButton from '../actionButton/actionButton.component';
import TableHeader from '../tableHeader/tableHeader.component';
import TableSearch from '../tableSearch/tableSearch.component';
import {UseTableFilter} from '../../utils/UseTableFilter';


const actionOptions = ['Approve','Edit','Delete'];

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
    const documents = <ViewButton/>;
    const actions = <ActionButton options={actionOptions}/> ;
    return { riderID, riderName, email, phone,dateJoined, documents, actions};
}

const rowsData = [
    createData(12333, 'Emmanuel Osaretin', 'emmanuel@gmail.com', 706484833 ,'20 July 2000', 'Online'),
    createData(12733, 'Abraham Osaretin', 'emmanuel@gmail.com', 706484833 ,'20 July 2000', 'Offline')
];


const RiderPendingTable = () => {

    const {query, handleQueryChange, filteredRows} = UseTableFilter(rowsData);
   
    const columns = columnsData;
    const rows = filteredRows;

    return(
        
        <>
        <TableHeader>
            <TableSearch query={query} handleQueryChange={handleQueryChange}/>
        </TableHeader>
        <DataTable columns={columns} rows={rows} paginate/>
     </>
        
        
    )
}

export default RiderPendingTable ;