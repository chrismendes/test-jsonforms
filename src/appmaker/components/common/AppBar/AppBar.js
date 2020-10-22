import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialAppBar from '@material-ui/core/AppBar';
import MaterialToolbar from '@material-ui/core/Toolbar';
import MaterialTypography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function AppBar() {
  const classes = useStyles();

  return (
    <MaterialAppBar position="fixed" className={classes.appBar}>
      <MaterialToolbar>
        <MaterialTypography variant="h6" noWrap>
          Application Maker
        </MaterialTypography>
      </MaterialToolbar>
    </MaterialAppBar>
  );

}
