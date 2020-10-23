/** @jsx jsx */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MaterialDrawer from '@material-ui/core/Drawer';
import MaterialToolbar from '@material-ui/core/Toolbar';
import MaterialList from '@material-ui/core/List';
import MaterialListItem from '@material-ui/core/ListItem';
import MaterialListItemText from '@material-ui/core/ListItemText';
import MaterialListItemIcon from '@material-ui/core/ListItemIcon';
import MaterialStarIcon from '@material-ui/icons/Star';
import { css, jsx } from '@emotion/core';

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

export default function SideBar(props) {

  const classes = useStyles();
  const links = props.links;
  
  return (
    <MaterialDrawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      css={css`
        @media (max-width: 1000px) {
          display: none;
        }
      `}
    >
      <MaterialToolbar />
      <div className={classes.drawerContainer}>
        <MaterialList>
          <MaterialListItem>
            <MaterialListItemText
              primary="Your Apps"
            />
          </MaterialListItem>
          {links.map((link, i) => (

            <NavLink to={link.url} key={link.url} css={css`color: #000000de; text-decoration: none;`}>
              <MaterialListItem button>
                <MaterialListItemIcon>
                  <MaterialStarIcon />
                </MaterialListItemIcon>
                <MaterialListItemText primary={link.text} />
              </MaterialListItem>
            </NavLink>
          ))}

        </MaterialList>
      </div>
    </MaterialDrawer>
  );
  
};