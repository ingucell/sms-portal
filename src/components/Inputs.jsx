import React, { useState } from 'react';
import { TextField, Container, Button, Box } from '@material-ui/core';
import { MailOutline as MailIcon, Edit as EditIcon } from '@material-ui/icons';

const Inputs = ({label}) => {
  const [topInputValue, setTopInputValue] = useState('');
  const [bottomInputValue, setBottomInputValue] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTopInputChange = (e) => {
    setTopInputValue(e.target.value);
  };

  
  return (

    <Box m='25px'>

   

      <TextField
        label={label}
        value={topInputValue}
        onChange={handleTopInputChange}
        fullWidth
        margin="normal"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <MailIcon  style={{ marginRight: '0.5e', color: '#1da26b' }} />
          ),
        }}
      />
   
    </Box>
    
  );
};

export default Inputs;
