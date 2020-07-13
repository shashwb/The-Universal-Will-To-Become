import React from 'react'
// import styles from '../Header.module.scss'

/** STYLES */
import styles from "./Styles/dropdown_styles.css";

/** MATERIAL REACT UI */
import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

const shapesHolderStyles = makeStyles({
  select: {
    marginTop: '0.3.rem',
    fontFamily: 'neutron',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: 'purple',
  }
});

const dropdownStyles = makeStyles((theme) => ({
      chips: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      chip: {
        margin: 2,
      },
      noLabel: {
        marginTop: theme.spacing(3),
      },
      optionText: {
        paddingTop: '0px',
        paddingBottom: '0px',
        marginTop: '4px',
        fontFamily: "Neuton",
        fontSize: '1.45rem',
      },
}));

const Dropdown = props => {
    console.log('what is dropdown props?', props);
    const classes = dropdownStyles();
    const shapesHolder_styles = shapesHolderStyles();

    const options = (props.options) ? props.options : [];

    const handleChange = (event) => {
        props.parent_setShape( event.target.value );
    }

    return (
      <FormControl className={classes.formControl}>
        <Select
          labelId="shape-chooser"
          id="shape-chooser"
          className={shapesHolder_styles.select}
          value={props.parent_shape}
          onChange={handleChange}
          input={ <Input/> }
        >
          {options.map((option) => (
            <MenuItem key={option} value={option} className={classes.optionText} >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )

}

export default Dropdown;