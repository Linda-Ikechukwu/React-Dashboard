import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>{children}</div>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        minWidth: '70vw',
        marginTop: '2rem'
    },
    tabheader:{
        borderBottom: '1px solid #C4C4C4',
        borderTopRightRadius:'4px',
        borderTopLeftRadius:'4px',
    },
    tabs:{
        maxWidth: '60rem',
        '& button':{
            flexGrow:0,
            color:'#C4C4C4',
            fontSize:'1.2rem',
        }
    }
}));

const TableTab = (props) => {

    const {tabTitles, tabContent} = props;

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <div className={classes.tabheader}>
                <Tabs className={classes.tabs}
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    textColor="primary"
                    TabIndicatorProps={{
                        style: { background: "#00567A", height: "2px", }
                    }}
                >
                    {
                        tabTitles.map((title, index) => (
                            <Tab key={index} label={title} {...a11yProps(index)} />
                        ))
                    }
                    
                </Tabs>

            </div>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {
                    tabContent.map((content,index)=>(
                        <TabPanel key={index} value={value} index={index} dir={theme.direction}>
                            {content}
                        </TabPanel>
                    ))
                }
            </SwipeableViews>
        </div>
    );
}

export default TableTab;