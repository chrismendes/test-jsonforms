import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';

const TextField = (props) => {

  const label = (props.label) ? props.label : '';

  return (
    <MaterialTextField label={label} />
  );
  
}

export default TextField;
