import React, { Fragment, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
    root: {
        '& input': {
            padding: '11px 11px',
            fontSize:'1.4rem', 
        },
        '& fieldset': {
            borderWidth: '2px',

            '& legend':{
                '& span':{
                    paddingLeft:'22px',
                }
            }
        },
        '& label': {
            fontSize: '1.4rem',
        }
    },
    
    
    
}));

function SelectDatePicker(props) {
    const classes = useStyles();

    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <Fragment>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    className={classes.root}
                    autoOk
                    variant="inline"
                    inputVariant="outlined"
                    label="Search By Date"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    InputAdornmentProps={{ position: "start" }}
                    onChange={date => handleDateChange(date)}
                />
            </MuiPickersUtilsProvider>


        </Fragment>
    );
}

export default SelectDatePicker;