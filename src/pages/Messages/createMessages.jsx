import React, { useState } from 'react';
import { Box, TextField } from '@material-ui/core';

const CreateMessages =() => {
  const [topInput, setTopInput] = useState('');
  const [bottomInput, setBottomInput] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleBottomInput = (event) => {
    setBottomInput(event.target.value);
    setWordCount(event.target.value.split(' ').filter(Boolean).length);
  };

  return (
    <Box
    
    >

    <div style={{backgroundColor: 'gray', margin:'20px 25%', width: '50%', height:'20rem', padding:'2rem', borderRadius:"0.5rem"}}>
      <TextField
        label="Top Input"
        value={topInput}
        onChange={(event) => setTopInput(event.target.value)}
        
      />
      <br /><br />
      <TextField
        label="Bottom Input"
        value={bottomInput}
        onChange={handleBottomInput}
        multiline
        rows={5}
      />
      <Box display="flex" justifyContent="flex-end">
        <Box p={1}>
          {wordCount}/160 words
        </Box>
      </Box>
    </div>

    </Box>
  );
}

export default CreateMessages;
