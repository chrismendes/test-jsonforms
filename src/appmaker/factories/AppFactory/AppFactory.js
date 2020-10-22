import React from 'react';
import FieldFactory from '../FieldFactory';

const AppFactory = (props) => {

  const config = props.config;
  const routePrefix = '/app/';

  if(!config) {
    return false;
  }

  const generateFields = (fieldConfig) => {
    return (
      <React.Fragment>
        {fieldConfig.map(function(field, i) {
          return <FieldFactory type={field.type} label={field.name} key={i} />
        })}
      </React.Fragment>
    );
  };
  
  return generateFields(config.fields);
  
};

export default AppFactory;