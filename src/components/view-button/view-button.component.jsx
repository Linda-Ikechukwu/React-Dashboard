import React, { Fragment, useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',

    },
    paper: {
      backgroundColor: '#ffffff',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      minHeight: '100vh',
      width:'50rem',
    },
  }));


const ViewButton = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [userInfo, setUserInfo] = useState({name:'', id: ''})

    const handleClose = () => {
        setOpen(false);
    };
    

    const handleViewClick = (event) => {
        event.preventDefault();
        const newUserInfo = {
            name: event.target.parentElement.parentElement.children[1].innerText,
            id: event.target.parentElement.parentElement.children[0].innerText,
        }
        console.log(event.target)
        setUserInfo(newUserInfo);
        setOpen(true);
    }

    return (
        <Fragment>
            <Link onClick={handleViewClick} href="#">
                View
           </Link>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}  
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h3 id="transition-modal-title">{userInfo.name}</h3>
                        <p id="transition-modal-description">{userInfo.id}</p>
                    </div>
                </Fade>
            </Modal>
        </Fragment>



    )
}

export default ViewButton;