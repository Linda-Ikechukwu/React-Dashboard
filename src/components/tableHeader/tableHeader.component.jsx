import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    tableHeader: {
        width:'100%',
        display: 'flex',
        padding: '2rem',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        justifyContent:'space-between',

        '& > *': {
            marginRight: '3rem',
        }
    },
}));



const TableHeader = ({ children }) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.tableHeader} >
                {children}

            </div>
            <Divider />
        </>
    )
}

export default TableHeader;