/** @jsx jsx */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppBar from './appmaker/components/common/AppBar';
import SideMenu from './appmaker/components/common/SideMenu';
import ClientAppCanvas from './appmaker/components/ClientAppCanvas';
import MaterialToolbar from '@material-ui/core/Toolbar';
import { css, jsx } from '@emotion/core';

function App() {
  
  return (
    <div css={css`
      display: flex;
    `}>
      <AppBar />
      <SideMenu />
      <main css={css`padding: 40px;`}>
        <MaterialToolbar />
        <ClientAppCanvas />
      </main>
    </div>
  );
}

export default App;
