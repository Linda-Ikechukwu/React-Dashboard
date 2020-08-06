import React, { Fragment, useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems:'center',
        color: '#4F4F4F',
        fontSize: '2rem',


        '& >*:hover':{
            cursor: 'pointer',
            color: 'black',
        },

        '& > *':{
            marginRight: '3px',
        },
    },
}));

const BackButton =(props)=>{
    const classes = useStyles();

    const {handleBackButtonClick} = props;

    return(
        <div className={classes.root}>
           <ArrowBackIcon onClick={handleBackButtonClick}/>
           <p onClick={handleBackButtonClick}>Back</p> 
        </div>
    )
}
 
export default BackButton;