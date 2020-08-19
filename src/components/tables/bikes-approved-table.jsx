import React from 'react';

import '../../index.scss'

import DataTable from '../table-base/table-base.component';
import ViewButton from '../view-button/view-button.component';
import ActionButton from '../action-button/action-button.component';

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
    const columns = columnsData;
    const rows = rowsData;

    return(
        
        <DataTable columns={columns} rows={rows} paginate/>
        
        
    )
}

export default BikerApprovedTable ;