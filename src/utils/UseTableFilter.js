import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const UseTableFilter = (rowsData) =>{

    const [query, setQuery] = useState("");

    const handleQueryChange = (e) =>{ 
        setQuery(e.target.value);
    }

    const filteredRows = rowsData.filter((row) => {
        let flag = false;
        Object.values(row).forEach((val) => {
          if(String(val).includes(query)) {
            flag = true;
            return;
          }    
        });
        if(flag) return row;
    });

    return {query, handleQueryChange, filteredRows};
}

UseTableFilter.propTypes = {
    /*rowsData is an array of objects(rows) that populates the table */
     rowsData : PropTypes.array,
}