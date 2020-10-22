import React from 'react';
import TextField from '../../../clientapps/components/TextField';

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
    }
  };
  
  return getField(type);
  
};

export default FieldFactory;