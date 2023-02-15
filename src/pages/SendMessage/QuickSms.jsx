import React, {useState} from 'react'
import { TextField, Container, Button, Box } from '@material-ui/core';
import { MailOutline as MailIcon, Edit as EditIcon } from '@material-ui/icons';
import Options from '../../components/Options';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import PageHeadings from '../../components/pageHeadings';



function QuickSms() {
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

    const [option, setOption] = useState('');
    const handleOptionChange = (event) => {
    setOption(event.target.value);

    }

  return (
    
    <Box m='15px'>
        <PageHeadings title='Quick SMS' subtitle='Send quick SMS here!'/>
        <Box>

        <Container maxWidth="sm" style={{ boxShadow: '0px 0px 7px #a7eacf', padding: '2em' }}>
            {/* input 1 */}
      <TextField
        label="Message"
        value={bottomInputValue}
        onChange={handleBottomInputChange}
        fullWidth
        multiline
        rows='5'
        margin="normal"
        variant="outlined"
        inputProps={{ maxLength: 160 }}
        InputProps={{
          startAdornment: (
            <EditIcon style={{ marginRight: '0.5em', color: '#1da26b' }} />
          ),
        }}
      />
{/* input 2  */}
<TextField
        label="Phone numbers separated by , e.g 0541509394,+233541509394"
        value={bottomInputValue}
        onChange={handleBottomInputChange}
        fullWidth
        multiline
        rows='5'
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
        <div style={{ textAlign: 'right' }}>
          {wordCount}/160 words
        </div>
      </div>

    {/* OPtion */}

    <Options />
    <Button variant="contained" style={{backgroundColor: 'cornflowerblue'}}>
          SEND MESSAGE
        </Button>
<br /><br /><br /><br /><br />

{/* check box goes here */}

    <Button variant="contained" style={{backgroundColor: '#7cdfb6'}}>
          SEND MESSAGE
        </Button>
    </Container>

    
        </Box>

        
    </Box>
  )
}

export default QuickSms;