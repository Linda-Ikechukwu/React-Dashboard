import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import DataTable from '../table-base/table-base.component';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        padding:'1rem',
        paddingLeft:'2rem',
        alignItems:'center',
        backgroundColor:'#ffffff',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
    },
}));


const columnsData = [
    { id: 'avatar', label: ''},
    { id: 'riderName', label: ''},
    { id: 'riderRating', label: ''},
];

const createData = (riderName, riderRating, ) => {
    const avatar = <Avatar>M</Avatar>
    return { avatar, riderName, riderRating};
}

const rowsData = [
    createData('Nsikan Etukudoh', 3.4),
    createData( 'Nsikan Etukudoh', 3.4),
    createData( 'Nsikan Etukudoh', 3.4),
    createData( 'Nsikan Etukudoh', 3.4),
    createData( 'Nsikan Etukudoh', 3.4),
];


const TopRidersTable = () => {
    const classes = useStyles();
    const columns = columnsData;
    const rows = rowsData;

    return(
        <div>
            <div className={classes.header}>
                <h4>Top Riders</h4>
            </div>
            <Divider/>
            <DataTable columns={columns} rows={rows} isHidden/>
        </div>
        
        
        
    )
}

export default TopRidersTable ;