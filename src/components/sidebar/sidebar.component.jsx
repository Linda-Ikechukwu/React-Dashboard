import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {withRouter } from 'react-router-dom';


import SidebarItem from '../sidebar-item/sidebar-item.component';

import { ReactComponent as BikeIcon } from '../../assets/svgs/sidebar/bikes.svg';
import { ReactComponent as BookingsIcon } from '../../assets/svgs/sidebar/bookings.svg';
import { ReactComponent as DashboardIcon } from '../../assets/svgs/sidebar/dashboard.svg';
import { ReactComponent as RevenueIcon } from '../../assets/svgs/sidebar/revenue.svg';
import { ReactComponent as RidersIcon } from '../../assets/svgs/sidebar/riders.svg';
import { ReactComponent as SettingsIcon } from '../../assets/svgs/sidebar/settings.svg';
import { ReactComponent as TripsIcon } from '../../assets/svgs/sidebar/trips.svg';
import { ReactComponent as UsersIcon } from '../../assets/svgs/sidebar/users.svg';

import Header from '../header/header.component'
const drawerWidth = '24rem';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#00567A',
    },
    list:{
        marginTop:'4rem',

    },
    toolbar:{
        height:'5rem',
        '& span': {
           color: '#FFFFFF',
           height:'5rem',
           display:'inline-block',
           fontSize:'2rem',
           paddingLeft: '1.8rem',
           paddingTop: '1rem',
       }
    }
    
}));

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar}>
                    <span>My Pickup</span>
                    <Divider />
                </div>
               
                <List className={classes.list} aria-label="sidebar navigation">
                    <SidebarItem to="/dashboard" primary="Dashboard" icon={<DashboardIcon />} />
                    <SidebarItem to="/users" primary="Users" icon={<UsersIcon />} />
                    <SidebarItem to="/riders" primary="Riders" icon={<RidersIcon />} />
                    <SidebarItem to="/trip" primary="Trips" icon={<TripsIcon />} />
                    <SidebarItem to="/bikes" primary="Bikes" icon={<BikeIcon />} />
                    <SidebarItem to="/bookings" primary="Manual Bookings" icon={<BookingsIcon />} />
                    <SidebarItem to="/revenue" primary="Revenue Report" icon={<RevenueIcon />} />
                    <SidebarItem to="/settings" primary="Settings" icon={<SettingsIcon />} />
                </List>
            </Drawer>

        </div>
    );
}

export default Sidebar;