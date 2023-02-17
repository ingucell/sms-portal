import React, {useState} from 'react';
import {Box, useTheme, Typography} from '@mui/material'
import BarChart from '../../components/Charts/BarChart';
import PageHeadings from '../../components/pageHeadings';
import { tokens } from "../../theme";
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { MailOutline as MailIcon, Edit as EditIcon } from '@material-ui/icons';

function DevliveryReports() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

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
    <>
      <Box
       m='20px' 
       p='10px'
       backgroundColor = {colors.black[500]}
       heigth= '3px'
      >
      <PageHeadings
        title="Delivery Reports"
        subtitle="View all delivery reports here"
      />

<Box display="flex" flexDirection="row" p={5} gap='10px'>
<TextField
        label="From"
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
      
      
      <TextField
      label="To"
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
        </Box>


<Box
display='flex'
gap='1rem'
marginLeft='2.5rem'
>
<Button className='' variant="contained" style={{backgroundColor: 'lightgreen'}}>
      View
    </Button>

    <Button className='' variant="contained" style={{backgroundColor: 'cornflowerblue'}}>
      Export
    </Button>
</Box>
 

 

{/* BarChart */}
<Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.black[600]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
          Billing Summary  
          </Typography>
          <Box height="25rem" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>


      </Box>
    </>
  )
}

export default DevliveryReports