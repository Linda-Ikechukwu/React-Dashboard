import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import '../sortby/sortby.component.scss'

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        background: 'none',
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const SortBy = (props) => {
    const { options } = props;


    const [value, setValue] = React.useState('');
    
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="sortby">
            <Typography className="sortby-label" id="demo-customized-select-label" variant="button" display="block" gutterBottom>
                sort by:
            </Typography>

            <FormControl className="sortby-input">
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={value}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    {
                        options.map((option,index) =>(
                           <MenuItem key={index} value={option}>{option}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>


        </div>
    );
}

export default SortBy;