/** @jsx jsx */
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MaterialAppBar from '@material-ui/core/AppBar';
import MaterialToolbar from '@material-ui/core/Toolbar';
import MaterialTypography from '@material-ui/core/Typography';
import { css, jsx } from '@emotion/core';

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

export default function AppBar(props) {

  const classes = useStyles();
  const appTitle = (props.title) ? props.title : '';

  return (
    <MaterialAppBar position="fixed" className={classes.appBar}>
      <MaterialToolbar>
        <MaterialTypography variant="h6" noWrap>
          <Link to="/" css={css`color: #fff; text-decoration: none;`}>
            {appTitle}
          </Link>
        </MaterialTypography>
      </MaterialToolbar>
    </MaterialAppBar>
  );

}
