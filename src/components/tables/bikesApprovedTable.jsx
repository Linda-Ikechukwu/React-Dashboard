import React,{Fragment} from 'react';

import '../../index.scss'

import DataTable from '../tableBase/tableBase.component';
import ViewButton from '../viewButton/viewButton.component';
import ActionButton from '../actionButton/actionButton.component';
import TableHeader from '../tableHeader/tableHeader.component';
import TableSearch from '../tableSearch/tableSearch.component';
import {UseTableFilter} from '../../utils/UseTableFilter';

const actionOptions = ['Edit','Delete'];

const columnsData = [
    { id: 'bikeID', label: 'Bike ID'},
    { id: 'bikerName', label: 'Bike Name'},
    { id: 'bikerModel', label: 'Bike Model'},
    { id: 'riderName', label: 'Rider Name'},
    { id: 'phone', label: 'Phone Number'},
    { id: 'documents', label: 'Documents'},
    { id: 'actions', label: 'Actions'},
];

const createData = (bikeID, bikerName, bikerModel, riderName, phone,) => {
    const documents = <ViewButton/>;
    const actions =<ActionButton options={actionOptions}/> ;
    return { bikeID, bikerName, bikerModel, riderName, phone, documents, actions};
}

const rowsData = [
    createData('kJA 333 HA', 'Lifan', 'Lifan Chimp 100','Emmanuel Osaretin', 706484833 ,),
    createData('kJA 333 HA', 'Lifan', 'Lifan Chimp 100','Emmanuel Osaretin', 706484833 ,),
];


const BikerApprovedTable = () => {

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

export default BikerApprovedTable ;