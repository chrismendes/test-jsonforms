import React from 'react';
import FieldFactory from '../../factories/FieldFactory';

const ClientAppContainer = () => {

  return (
    <React.Fragment>
      <FieldFactory type="text" label="This is a test" />
      <FieldFactory type="datetime" label="This is a test" />
    </React.Fragment>
  )
  
}

export default ClientAppContainer;