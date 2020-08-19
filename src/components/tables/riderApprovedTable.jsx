import React, {Fragment} from 'react';
import { useHistory } from "react-router-dom";

import '../../index.scss'

import DataTable from '../tableBase/tableBase.component';
import ViewButton from '../viewButton/viewButton.component';
import ActionButton from '../actionButton/actionButton.component';
import StatusButton from '../statusButton/statusButton.component';
import TableHeader from '../tableHeader/tableHeader.component';
import TableSearch from '../tableSearch/tableSearch.component';
import {UseTableFilter} from '../../utils/UseTableFilter';



const actionOptions = ['Edit','Delete'];

const columnsData = [
    { id: 'riderID', label: 'Rider ID'},
    { id: 'riderName', label: 'Rider Name'},
    { id: 'email', label: 'Email Address'},
    { id: 'phone', label: 'Phone Number'},
    { id: 'dateJoined', label: 'Date Joined'},
    { id: 'status', label: 'Status'},
    { id: 'documents', label: 'Documents'},
    { id: 'actions', label: 'Actions'},
];

const createData = (riderID, riderName, email, phone, dateJoined, status) => {
    status = <StatusButton style={status}>{status}</StatusButton>
    const documents = <ViewButton/>;
    const actions =<ActionButton options={actionOptions}/> ;
    return { riderID, riderName, email, phone,dateJoined, status, documents, actions};
}

const rowsData = [
    createData(12333, 'Emmanuel Osaretin', 'emmanuel@gmail.com', 706484833 ,'20 July 2000', 'online'),
    createData(12733, 'Abraham Osaretin', 'emmanuel@gmail.com', 706484833 ,'20 July 2000', 'offline')
];


const RiderApprovedTable = (props) => {
    let history = useHistory();

    const {query, handleQueryChange, filteredRows} = UseTableFilter(rowsData);
   
    const columns = columnsData;
    const rows = filteredRows;

    const handleRowClick = (event) => {
        event.preventDefault();
        if((event.target.tagName === 'TD')){
            const id = event.target.parentElement.children[0].innerText;
            console.log(event.target.tagName)
            history.push(`/riders/${id}/rides`);
           
        }else{
            return;
        }
    }

    return(
        <>
           <TableHeader>
               <TableSearch query={query} handleQueryChange={handleQueryChange}/>
           </TableHeader>
           <DataTable columns={columns} rows={rows} handleRowClick={handleRowClick} paginate />
        </>
        
        
    )
}

export default RiderApprovedTable ;