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
    `}>
      {props.children}
    </div>
  );

};

export default LayoutFactory;