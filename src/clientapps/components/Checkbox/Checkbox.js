import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MaterialCheckbox from '@material-ui/core/Checkbox';
import MaterialFormControlLabel from '@material-ui/core/FormControlLabel';

const Checkbox = (props) => {

  const GreenCheckbox = withStyles({
    root: {
      '&$checked': {
        color: '#43a047',
      },
    },
    checked: {},
  })((props) => <MaterialCheckbox color="default" {...props} />);
  
  const label = (props.label) ? props.label : '';

  return (
    <MaterialFormControlLabel
      control={<GreenCheckbox name="checkedG" />}
      label={label}
    />
  );
  
}

export default Checkbox;