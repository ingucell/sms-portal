import React, { useState } from 'react';
import { TextField, Container, Button, Box } from '@material-ui/core';
import { MailOutline as MailIcon, Edit as EditIcon } from '@material-ui/icons';
import PageHeadings from '../../components/pageHeadings';
import Groups2Icon from '@mui/icons-material/Groups2';

const CreateGroups = () => {
  const [topInputValue, setTopInputValue] = useState('');

  const handleTopInputChange = (e) => {
    setTopInputValue(e.target.value);
  };

  
  return (

    <Box m='25px'>

    <Box display="flex" justifyContent="space-between" alignItems="center">
        <PageHeadings title="Create Messages" subtitle="Create all your messages here!" />

      </Box>

<Container maxWidth="sm" style={{ boxShadow: '0px 0px 7px #a7eacf', padding: '2em', marginTop: '4rem' }}>
      <TextField
        label="Group Name"
        value={topInputValue}
        onChange={handleTopInputChange}
        fullWidth
        margin="normal"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <Groups2Icon  style={{ marginRight: '0.5e', color: '#1da26b' }} />
          ),
        }}
      />
    
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1em' }}>
        <Button variant="contained" style={{backgroundColor: '#7cdfb6'}}>
          Add Group
        </Button>
      </div>
    </Container>
    </Box>
    
  );
};

export default CreateGroups;
