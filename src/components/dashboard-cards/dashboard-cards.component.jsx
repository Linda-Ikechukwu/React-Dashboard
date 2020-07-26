import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { ReactComponent as CancelledTrips } from '../../assets/svgs/dashboard/cancelled-trips.svg';
import { ReactComponent as CompletedTrips } from '../../assets/svgs/dashboard/completed-trips.svg';
import { ReactComponent as ScheduledTrips } from '../../assets/svgs/dashboard/scheduled-trips.svg';
import { ReactComponent as OngoingTrips } from '../../assets/svgs/dashboard/ongoing-trips.svg';
import { ReactComponent as TotalTrips } from '../../assets/svgs/dashboard/total-trips.svg';
import { ReactComponent as OfflineRiders } from '../../assets/svgs/dashboard/offline-riders.svg';
import { ReactComponent as OnlineRiders } from '../../assets/svgs/dashboard/online-riders.svg';
import { ReactComponent as PendingRiders } from '../../assets/svgs/dashboard/pending-riders.svg';
import { ReactComponent as TotalRiders } from '../../assets/svgs/dashboard/total-riders.svg';
import { ReactComponent as TotalRevenue } from '../../assets/svgs/dashboard/revenue.svg';

import DashboardCard from '../dashboard-card/dashboard-card.component'

const DashboardCards = () => {

    return (
        <Grid container spacing={3}>
            <DashboardCard icon={<TotalRiders/>} number="1000" text="Total Riders"/>
            <DashboardCard icon={<OnlineRiders/>} number="1000" text="Online Riders"/>
            <DashboardCard icon={<OfflineRiders/>} number="1000" text="Offline Riders"/>
            <DashboardCard icon={<PendingRiders/>} number="1000" text="Pending Riders"/>
            <DashboardCard icon={<TotalTrips/>} number="1000" text="Total Trips"/>
            <DashboardCard icon={<CompletedTrips/>} number="1000" text="Completed Trips"/>
            <DashboardCard icon={<OngoingTrips/>} number="1000" text="Ongoing Trips"/>
            <DashboardCard icon={<ScheduledTrips/>} number="1000" text="Scheduled Trips"/>
            <DashboardCard icon={<CancelledTrips/>} number="1000" text="Cancelled Trips"/>
            <DashboardCard icon={<TotalRevenue/>} number="1000" text="Total Revenue"/>


        </Grid>
    )
}

export default DashboardCards;