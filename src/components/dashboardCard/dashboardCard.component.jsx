import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';

import '../dashboardCard/dashboardCard.component.scss';


const DashboardCard = (props) => {
    const { icon, number, text } = props;

    return (
        < Grid item sm = { 6} md = { 3} >
            <Card className="card">
                <IconButton className="card-icon">{icon}</IconButton>
                <CardContent className="card-details">
                    <Typography className="card-number" component="h3" variant="h3">
                        {number}
                    </Typography>
                    <Typography className="card-subtitle" variant="subtitle2" color="textSecondary">
                        {text}
                    </Typography>
                </CardContent>
            </Card>
        </Grid >
        
    )
}

export default DashboardCard;