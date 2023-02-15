import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from '@mui/material'
import {tokens} from '../theme'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

// Styles for options
const useStyles = makeStyles((theme) => ({
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    input: {
      width: '100%',
      marginBottom: theme.spacing(2),
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'green',
        },
        '&:hover fieldset': {
          borderColor: 'green',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
    button: {
      backgroundColor: 'green',
      color: 'white',
      '&:hover': {
        backgroundColor: 'darkgreen',
      },
    },
  }));

export default function Options() {

    const classes = useStyles();
    const [option, setOption] = useState('');

    const handleOptionChange = (event) => {
    setOption(event.target.value);
  };


  return (


    <Box m='25px'>
 
    

{/* Option two */}
    <Box
    marginTop='40px'
    >
    <FormControl className={classes.input} >
        <InputLabel>Select Sender ID</InputLabel>
        <Select
          value={option}
          onChange={handleOptionChange}
        >
          <MenuItem value="">Select an option</MenuItem>
          <MenuItem value="Option 1">Option 1</MenuItem>
          <MenuItem value="Option 2">Option 2</MenuItem>
          <MenuItem value="Option 3">Option 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </Box>
   
  );
}
