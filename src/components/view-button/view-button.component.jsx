import React, { Fragment, useState } from 'react';
import Link from '@material-ui/core/Link';
import  DocumentModal from '../document-modal/document-modal.component'


const ViewButton = () => {
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
        setUserInfo(newUserInfo);
        setOpen(true);
    }

    return (
        <Fragment>
            <Link onClick={handleViewClick} href="#">
                View
           </Link>
           <DocumentModal 
            handleClose={handleClose} 
            open={open} 
            userInfo={userInfo}>
                
            </DocumentModal>
           
        </Fragment>



    )
}

export default ViewButton;