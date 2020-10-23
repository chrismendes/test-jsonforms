/** @jsx jsx */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppFactory from './appmaker/factories/AppFactory';
import URLHelper from './appmaker/helpers/url';
import userData from './appmaker/services/userData';

import AppBar from './appmaker/components/common/AppBar';
import SideMenu from './appmaker/components/common/SideMenu';
import ClientAppContainer from './appmaker/components/common/ClientAppContainer';
import MaterialToolbar from '@material-ui/core/Toolbar';
import { css, jsx } from '@emotion/core';

function App() {

  const clientApps = userData.apps;
  const routePrefix = '/app/';
  const appLinks = clientApps.map((app) => {
    return {
      text: app.name,
      url: routePrefix + URLHelper.stringToURL(app.name)
    }
  });

  return (
    <Router>
      <div css={css`display: flex;`}>

        <AppBar />
        <SideMenu links={appLinks} />

        <ClientAppContainer>
          <MaterialToolbar />

          <Switch>
            <Route
              key="0"
              path="/"
              exact
            >
              <h2>Select an Application</h2>
            </Route>

            {clientApps.map((app, i) => (
              <Route
                key={i+1}
                path={routePrefix + URLHelper.stringToURL(app.name)}
                exact
              >
                <AppFactory config={app} />
              </Route>
            ))}
          </Switch>

        </ClientAppContainer>
      </div>
    </Router>
  );
}

export default App;