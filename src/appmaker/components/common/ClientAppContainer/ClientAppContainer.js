/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { PinDropSharp } from '@material-ui/icons';

const ClientAppContainer = (props) => {

  return (
    <main css={css`padding: 40px 80px; width: 100%;`}>
      {props.children}
    </main>
  );
  
};

export default ClientAppContainer;