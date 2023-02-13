import React, { useState } from 'react';
import { TextField, Container, Button, Box } from '@material-ui/core';
import { MailOutline as MailIcon, Edit as EditIcon } from '@material-ui/icons';
import PageHeadings from '../../components/pageHeadings';

const CreateMessages = () => {
  const [topInputValue, setTopInputValue] = useState('');
  const [bottomInputValue, setBottomInputValue] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTopInputChange = (e) => {
    setTopInputValue(e.target.value);
  };

  const handleBottomInputChange = (e) => {
    setBottomInputValue(e.target.value);
    setWordCount(e.target.value.split(' ').length);
  };

  return (

    <Box m='25px'>

    <Box display="flex" justifyContent="space-between" alignItems="center">
        <PageHeadings title="Create Messages" subtitle="Create all your messages here!" />

      </Box>

<Container maxWidth="sm" style={{ boxShadow: '0px 0px 7px #a7eacf', padding: '2em', marginTop: '5rem' }}>
      <TextField
        label="Message Title"
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
      <TextField
        label="Message Content"
        value={bottomInputValue}
        onChange={handleBottomInputChange}
        fullWidth
        multiline
        margin="normal"
        variant="outlined"
        inputProps={{ maxLength: 160 }}
        InputProps={{
          startAdornment: (
            <EditIcon style={{ marginRight: '0.5em', color: '#1da26b' }} />
          ),
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1em' }}>
        <Button variant="contained" style={{backgroundColor: '#7cdfb6'}}>
          Submit
        </Button>
        <div style={{ textAlign: 'right' }}>
          {wordCount}/160 words
        </div>
      </div>
    </Container>
    </Box>
    
  );
};

export default CreateMessages;
