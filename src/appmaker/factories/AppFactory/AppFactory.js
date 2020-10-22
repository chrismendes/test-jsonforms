import React from 'react';
import FieldFactory from '../FieldFactory';

const AppFactory = (props) => {

  const config = props.config;
  const routePrefix = '/app/';

  if(!config) {
    return false;
  }

  const generateRoute = (name) => {
    if(!name) return null;
    const routeName = name.toLowerCase().replace(' ', '-');
    const url = routePrefix + routeName;
    return url;
  }

  const generateFields = (fieldConfig) => {
    return (
      <React.Fragment>
        {fieldConfig.map(function(field) {
          if(!field.name || !field.type) {
            return <FieldFactory type={field.type} label={field.name} />
          }
        })}
      </React.Fragment>
    );
  };
  
  return generateFields(config.fields);
  
};

export default AppFactory;