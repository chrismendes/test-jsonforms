/** @jsx jsx */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FormFactory from './formviewer/factories/FormFactory';
import URLHelper from './formviewer/helpers/url';
import userData from './formviewer/services/userData';

import AppBar from './formviewer/components/AppBar';
import SideMenu from './formviewer/components/SideMenu';
import ClientAppContainer from './formviewer/components/ClientAppContainer';
import MaterialToolbar from '@material-ui/core/Toolbar';
import { css, jsx } from '@emotion/core';

function App() {

  const clientApps = userData.apps;
  const routePrefix = '/form/';
  const appLinks = clientApps.map((app) => {
    return {
      text: app.name,
      url: routePrefix + URLHelper.stringToURL(app.name)
    }
  });

  return (
    <Router>
      <div css={css`display: flex;`}>

        <AppBar title="JSON Forms" />
        <SideMenu links={appLinks} />

        <ClientAppContainer>
          <MaterialToolbar />

          <Switch>
            <Route
              key="0"
              path="/"
              exact
            >
              <h1 css={css`margin-top: 0;`}>
                Select Form
              </h1>
              <p css={css`@media(max-width: 1000px) { display: none; }`}>
                Select a JSON-defined form from the sidebar.
              </p>
              <div css={css`@media(min-width: 1001px) { display: none; }`}>
                {clientApps.map((app, i) => (
                  <p><a href={routePrefix + URLHelper.stringToURL(app.name)}>{app.name}</a></p>
                ))}
              </div>
            </Route>

            {clientApps.map((app, i) => (
              <Route
                key={i+1}
                path={routePrefix + URLHelper.stringToURL(app.name)}
                exact
              >
                <p css={css`@media(min-width: 1001px) { display: none; }`}>
                  <a href="/">&laquo; Back</a>
                </p>
                <FormFactory config={app} />
              </Route>
            ))}
          </Switch>

        </ClientAppContainer>
      </div>
    </Router>
  );
}

export default App;