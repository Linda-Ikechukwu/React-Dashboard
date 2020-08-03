import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import '../../index.scss'

import SortBy from '../../components/sortby/sortby.component';
import UsersTable from '../../components/tables/all-users-table';

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}));


const UsersPage = () => {

    const classes = useStyles();

    return(
        <main className="main-content">

           <div className={classes.toolbar} />
            <UsersTable/>
          
        </main>
    )
}

export default UsersPage;