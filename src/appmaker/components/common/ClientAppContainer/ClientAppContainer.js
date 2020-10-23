/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { PinDropSharp } from '@material-ui/icons';

const ClientAppContainer = (props) => {

  return (
    <main css={css`
      padding: 60px 80px;
      @media (max-width: 1000px) {
        padding: 25px;
      }
    `}>
      {props.children}
    </main>
  );
  
};

export default ClientAppContainer;