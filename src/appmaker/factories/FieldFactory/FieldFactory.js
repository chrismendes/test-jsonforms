import React from 'react';
import TextField from '../../../clientapps/components/TextField';
import DateTime from '../../../clientapps/components/DateTime';

const FieldFactory = (props) => {

  const type = props.type;
  const label = props.label;
  if(!type) {
    return false;
  }

  const getField = (type) => {
    switch(type) {
      case "text":
        return <TextField {...props} />
      case "datetime":
        return <DateTime {...props} />
    }
  };
  
  return getField(type);
  
};

export default FieldFactory;