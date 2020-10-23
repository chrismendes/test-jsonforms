import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';

const DateTime = () => {

  return (
    <MaterialTextField
      id="datetime-local"
      label="Next appointment"
      type="datetime-local"
      defaultValue="2017-05-24T10:30"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
  
}

export default DateTime;