import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const ActionButton =()=> {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreHorizIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
        </div>
    );
}

export default ActionButton;