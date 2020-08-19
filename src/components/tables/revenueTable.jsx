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
    status = <StatusButton style={status}>{status}</StatusButton>
    return { tripID,riderID, riderName, rideTime,paymentType, tripFare,discount,riderEarn,ownEarn, status};
}

const rowsData = [
    createData('108737NT', '22390', 'Nsikan Etukudoh', '15th Jul, 2020','card','N350','N10','N100','N100','pending'),
    createData('108737NT', '22390', 'Nsikan Etukudoh', '15th Jul, 2020','card','N350','N10','N100','N100','approved'),
];


const RevenueTable = () => {
    const history = useHistory();
    const {query, handleQueryChange, filteredRows} = UseTableFilter(rowsData);

    
    const handleRowClick = (event) => {
        event.preventDefault();
        if((event.target.tagName === 'TD')){
            const id = event.target.parentElement.children[1].innerText;
            console.log(event.target.tagName)
            history.push(`/riders/${id}/rides`);
           
        }else{
            return;
        }
    }

    const columns = columnsData;
    const rows = filteredRows;

    return(
        <>
          <TableHeader>
               <h4>Total Earnings:
                   <span className="u-bold"> N450000</span>
                </h4>
               <h4>Total Pending:
                   <span className="u-bold"> N450000</span> 
                </h4>
               <TableSearch query={query} handleQueryChange={handleQueryChange}/>
          </TableHeader>
          <DataTable columns={columns} rows={rows} handleRowClick={handleRowClick} paginate/>
        </>
        
        
        
    )
}

export default RevenueTable ;