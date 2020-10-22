/** @jsx jsx */
import React from 'react';
import AppBar from './appmaker/components/AppBar';
import SideMenu from './appmaker/components/SideMenu';
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
