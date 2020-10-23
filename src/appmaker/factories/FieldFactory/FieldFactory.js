/** @jsx jsx */
import React from 'react';
import TextField from '../../../clientapps/components/TextField';
import DateTime from '../../../clientapps/components/DateTime';
import Checkbox from '../../../clientapps/components/Checkbox';
import Number from '../../../clientapps/components/Number';
import { css, jsx } from '@emotion/core';

const FieldFactory = (props) => {

  const type = props.type;
  const label = props.label;
  if(!type) {
    return false;
  }

  const getComponent = (type) => {
    switch(type) {
      case 'text':
        return <TextField {...props} />
      case 'integer':
        return <Number {...props} />
      case 'datetime':
        return <DateTime {...props} />
      case 'bool':
        return <Checkbox {...props} />
      default:
        return (
          <p css={css`color: #888; font-style: italic;`}>
            Field not implemented for type: {type}
          </p>
        );
    }
  };
  
  return getComponent(type);
  
};

export default FieldFactory;