import { useHistory } from 'react-router';

import { Drawer, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import HistoryIcon from '@material-ui/icons/History';

const useStyles = makeStyles({
    drawer: {
        width: '1000px'
    },
});

const SideMenu = () => {
    const history = useHistory();
    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            className={classes.drawer}
        >
            <List>
                {[
                    { text: 'Strona główna', icon: <HomeIcon />, path: "/" },
                    { text: 'Dodaj rachunek', icon: <AddIcon />, path: "/newBill" },
                    { text: 'Historia', icon: <HistoryIcon />, path: "/history" }
                ].map(x => (
                    <ListItem button key={x.text} onClick={() => { history.push(x.path) }}>
                        <ListItemIcon>{x.icon}</ListItemIcon>
                        <ListItemText primary={x.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default SideMenu;