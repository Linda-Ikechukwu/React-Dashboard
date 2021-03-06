import React from 'react';
import { Route, MemoryRouter } from 'react-router';
import { NavLink as RouterLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import '../sidebar-item/sidebar-item.component.scss';


const SidebarItem = (props) => {
    const { icon, primary, to } = props;

    const renderLink = React.useMemo(
        () => React.forwardRef((itemProps, ref) => <RouterLink activeClassName="selected" to={to} ref={ref} {...itemProps} />),
        [to],
    );

    const handleClick = () =>{

    }

    return (
        <li>
            <ListItem className="sidebar-item" button component={renderLink}>
                {icon ? <ListItemIcon className="sidebar-item-icon">{icon}</ListItemIcon> : null}
                <ListItemText className="sidebar-item-text" primary={primary} />
            </ListItem>
        </li>
    );
}

export default SidebarItem;

