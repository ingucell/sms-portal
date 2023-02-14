import React, { useState } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import PageHeadings from '../../components/pageHeadings';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '60%',
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

function NewContact() {
  const classes = useStyles();
  const [option, setOption] = useState('');

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  return (

    <>
         <Box display="flex" justifyContent="space-between" alignItems="center">
        <PageHeadings title="New Contact" subtitle="Create your contacts here!" />

      </Box>
  
    <form className={classes.form}>
        
      <TextField
        label="Text"
        className={classes.input}
        variant="outlined"
      />
      <FormControl className={classes.input} variant="outlined">
        <InputLabel>Select an option</InputLabel>
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
      <Button className={classes.button} variant="contained">
        Submit
      </Button>
    </form>
    </>
  );
}

export default NewContact;
