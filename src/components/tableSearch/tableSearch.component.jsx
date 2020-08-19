import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginRight: 'auto',

        '& .MuiInputBase-input': {
            fontSize: '1.4rem',
        },

        '& .MuiOutlinedInput-input': {
            padding: '1.4rem ',
        },
        '& .MuiFormLabel-root': {
            fontSize: '1.5rem',
            marginTop: '-6px',
        },
        '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
            transform: 'translate(10px, -4px) scale(1)',
            fontSize: '1rem',
        },
        '& .Mui-focused': {
            color: '#00567A',
        }
    },
    parent: {
        position:'relative',
        marginLeft:'auto',
    },

});

const TableSearch = (props) => {
    const classes = useStyles();

    const { query, handleQueryChange } = props;

    return (
        <div className={classes.parent}>
            <TextField className={classes.root}
                type='text'
                id="outlined-basic"
                label="Search" variant="outlined"
                value={query}
                onChange={handleQueryChange}
            />
        </div>
    )
}

export default TableSearch;

TableSearch.propTypes = {

    /*Query contains the search string to filter each table agaisnt */
    query: PropTypes.string,

    /*handleQueryChange filters the table on query change */
    handleQueryChange: PropTypes.func,
}