/** @jsx jsx */
import React from 'react';
import FieldFactory from '../FieldFactory';
import LayoutFactory from '../LayoutFactory';
import { css, jsx } from '@emotion/core';

const AppFactory = (props) => {

  const config = props.config;
  const layouts = props.config.layout;
  const routePrefix = '/app/';

  if(!config) {
    return false;
  }

  /**
   * Fetch column/row position for given field
   * 
   * @param {string} fieldName Name of field
   * @returns {object} Column/row position
   */
  const getLayoutConfig = (fieldName) => {
    if(!fieldName) {
      return false;
    }
    for(const layout of layouts) {
      if(layout.field === fieldName) {
        return {
          column: (layout.position.column + 1),
          row: (layout.position.row + 1)
        };
      }
    }
    return null;
  };

  /**
   * Generate fields with layout positioning based on given config data
   * 
   * @param {object} fieldConfig Field config/definition object
   */
  const generateFields = (fieldConfig) => {
    return (
      <React.Fragment>
        <h1 css={css`
          margin-top: 0;
          margin-bottom: 40px;
        `}>
          {config.name}
        </h1>

        <div css={css`
          display: grid;
          grid-template-columns: 50% 50%;
          grid-column-gap: 40px;
          grid-auto-rows: 100px;
          @media (max-width: 600px) {
            display: flex;
            flex-direction: column;
          }
        `}>

          {fieldConfig.map(function(field, i) {
            const layout = getLayoutConfig(field.name);

            return ((layout) ?
              <LayoutFactory col={layout.column} row={layout.row} key={i} css={css``}>
                <FieldFactory type={field.type} label={field.name} key={i} />
              </LayoutFactory>
            : '');
          })}

        </div>
      </React.Fragment>
    );
  };

  return generateFields(config.fields);
  
};

export default AppFactory;