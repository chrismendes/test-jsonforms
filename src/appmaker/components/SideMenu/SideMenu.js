import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialDrawer from '@material-ui/core/Drawer';
import MaterialToolbar from '@material-ui/core/Toolbar';
import MaterialList from '@material-ui/core/List';
import MaterialListItem from '@material-ui/core/ListItem';
import MaterialListItemText from '@material-ui/core/ListItemText';
import MaterialListItemIcon from '@material-ui/core/ListItemIcon';
import MaterialDesktopWindowsIcon from '@material-ui/icons/DesktopWindows';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function SideBar() {

  const classes = useStyles();
  const menuItems = [ 'Equipment Request', 'Edit Manufacturer' ];
  
  return (
    <MaterialDrawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <MaterialToolbar />
      <div className={classes.drawerContainer}>
        <MaterialList>
          <MaterialListItem>
            <MaterialListItemText
              primary="Your Applications"
            />
          </MaterialListItem>
          {menuItems.map((text, index) => (
            <MaterialListItem button key={text}>
              <MaterialListItemIcon>
                <MaterialDesktopWindowsIcon />
              </MaterialListItemIcon>
              <MaterialListItemText primary={text} />
            </MaterialListItem>
          ))}

        </MaterialList>
      </div>
    </MaterialDrawer>
  );
  
};