/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

const LayoutFactory = (props) => {

  const columnPosition = props.col;
  const rowPosition = props.row;

  return (
    <div css={css`
      grid-column-start: ${columnPosition};
      grid-column-end: ${columnPosition};
      grid-row-start: ${rowPosition};
      grid-row-end: ${rowPosition};
      @media (max-width: 1000px) {
        margin-bottom: 40px;
      }
    `}>
      {props.children}
    </div>
  );

};

export default LayoutFactory;