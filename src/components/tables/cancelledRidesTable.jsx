import React from 'react';

import '../../index.scss'

import DataTable from '../tableBase/tableBase.component';
import ViewButton from '../viewButton/viewButton.component';
import ActionButton from '../actionButton/actionButton.component';
import StatusButton from '../statusButton/statusButton.component';
import TableHeader from '../tableHeader/tableHeader.component';
import TableSearch from '../tableSearch/tableSearch.component';
import {UseTableFilter} from '../../utils/UseTableFilter';


const columnsData = [
    { id: 'tripID', label: 'Trip ID'},
    { id: 'riderName', label: 'Rider Name'},
    { id: 'sender', label: 'Sender Details'},
    { id: 'receipient', label: 'Receipient Details'},
    { id: 'pickup', label: 'PickUp Address'},
    { id: 'dropoff', label: 'DropOff Address'},
    { id: 'type', label: 'Item Category'},
    { id: 'fare', label: 'Trip Fare'},
    { id: 'createdOn', label: 'Created On'},
    { id: 'pickupTime', label: 'PickUp Time'},
    { id: 'dropoffTime', label: 'DropOff Time'},
    { id: 'status', label: 'Status'},
];

const createData = (tripID, riderName, sender, receipient, pickup, dropoff,type,fare,createdOn,pickupTime,dropoffTime,status) => {
    status = <StatusButton style={status}>{status}</StatusButton>
    return { tripID, riderName, sender, receipient, pickup, dropoff,type,fare,createdOn,pickupTime,dropoffTime,status};
}

const rowsData = [
    createData('108737NT', 'Nsikan Etukudoh', 'Tammy Jerome','Emmanuel Osaretin','Atiku Abubakar rd','124 Oron rd. Uyo ','Breakable','N350', '15th Jul, 2020','15th Jul, 2020','15th Jul, 2020','cancelled'),
    createData('108737NT', 'Nsikan Etukudoh', 'Tammy Jerome','Emmanuel Osaretin','Atiku Abubakar rd','124 Oron rd. Uyo ','Breakable','N350', '15th Jul, 2020','15th Jul, 2020','15th Jul, 2020','cancelled'),
];


const CancelledRidesTable = () => {

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

export default CancelledRidesTable ;