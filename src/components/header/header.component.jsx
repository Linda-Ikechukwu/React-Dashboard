import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    height: '5.1rem',
    backgroundColor:'#FFFFFF',

    '& div':{
        height: '5.1rem',
        display: 'flex',
        justifyContent: 'right',
        color:'#4F4F4F',
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  IconButton:{
    padding:'.8rem 1rem',
 },
  icon:{
      width:'2.8rem',
      height:'2.8rem',
  }
}));


const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Hello
                </Typography>
                <IconButton className={classes.IconButton}
                   aria-label="account of current user"
                >
                   <AccountCircle className={classes.icon} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header;