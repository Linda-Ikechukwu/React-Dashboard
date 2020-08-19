import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import '../../index.scss'

import SortBy from '../../components/sortby/sort.component';
import UsersTable from '../../components/tables/allUsersTable';

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