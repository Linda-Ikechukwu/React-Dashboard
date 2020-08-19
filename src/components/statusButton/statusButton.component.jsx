import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles =  makeStyles({
    root: {
        width: '50px',
        textAlign: 'center',
    }
})

const StatusButton = (props) => {
    const classes = useStyles();
    const {children, style} = props;
    return(
       <div className={style}>
           <span>{children}</span>
       </div>
    )
}

export default StatusButton;