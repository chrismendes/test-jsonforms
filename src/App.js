import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from './components/AppBar';
import SideMenu from './components/SideMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <SideMenu />
    </div>
  );
}

export default App;
