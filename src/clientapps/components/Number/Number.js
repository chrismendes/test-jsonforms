import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTypography from '@material-ui/core/Typography';
import MaterialSlider from '@material-ui/core/Slider';
import MaterialInput from '@material-ui/core/Input';
import MaterialGrid from '@material-ui/core/Grid';

const Number = (props) => {

  const label = (props.label) ? props.label : '';

  const useStyles = makeStyles({
    root: {
      width: 250,
    },
    input: {
      width: 42,
    },
  });
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  
  return (
    <div className={classes.root}>
      <MaterialTypography id="input-slider" gutterBottom>
        {label}
      </MaterialTypography>
      <MaterialGrid container spacing={2} alignItems="center">
        <MaterialGrid item xs>
          <MaterialSlider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
          />
        </MaterialGrid>
        <MaterialGrid item>
          <MaterialInput
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: "number"
            }}
          />
        </MaterialGrid>
      </MaterialGrid>
    </div>
  );
  
}

export default Number;