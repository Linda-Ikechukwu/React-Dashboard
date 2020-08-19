import React from 'react';
import PropTypes from 'prop-types'
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
    width: '50rem',
  },
}));

const DocumentModal = (props) => {
  const classes = useStyles();

  const { handleClose, open, userInfo } = props;

  return (
    <>
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
    </>
  );
}

export default DocumentModal;

DocumentModal.propTypes = {

  /*Function that handles closing of the modal when backdrop is clicked */
  handleClose: PropTypes.func,

  /*Boolean. If true modal is open, if false modal is closed */ 
  open: PropTypes.bool,

  userInfo: PropTypes.object,
}