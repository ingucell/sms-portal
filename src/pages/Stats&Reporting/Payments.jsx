import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from '@mui/material'
import {tokens} from '../../theme'
import PageHeadings from '../../components/pageHeadings';
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

const columns = [
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'numberofContacts',
    headerName: 'Number of contacts',
    width: 150,
    editable: true,
  },

];

const rows = [
  { id: 1, name: 'Snow', numberofContacts: 'Jon'},
  { id: 2, name: 'Lannister', numberofContacts: 'Cersei'},
];

export default function Payments() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const classes = useStyles();
    const [option, setOption] = useState('');

    const handleOptionChange = (event) => {
    setOption(event.target.value);
  };


  return (


    <Box m='25px'>
  <PageHeadings title="Payments" subtitle="View all Payments here!"/>

            <Box
    m="15px 0 0 0"
    height="25vh"
    sx={{
      "& .MuiDataGrid-root": {
        border: "none",
      },
      "& .MuiDataGrid-cell": {
        borderBottom: "none",
        
      },
      // "& .MuiDataGrid-virtualScrollerRenderZone": {
      //   backgroundColor: `${colors.blue[600]} !important`,    
      // },
      "& .name-column--cell": {
        color: colors.black[100],
      },
      "& .MuiDataGrid-columnHeaders": {
        backgroundColor: colors.green[500],
        color: 'white',
        borderBottom: "none",
      },
      "& .MuiDataGrid-virtualScroller": {
        backgroundColor: colors.black[500],
      },
      "& .MuiDataGrid-footerContainer": {
        borderTop: "none",
        backgroundColor: colors.blue[900],
      },
      "& .MuiCheckbox-root": {
        color: `${colors.green[200]} !important`,
      },
      "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
        color: `${colors.black[100]} !important`,
      },
    }}
  >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
{/* OPtion one */}
    <Box 
      marginTop='40px'
    >
      
    </Box>


{/* Option two */}
    <Box
    marginTop='40px'
    >
   
    </Box>

    </Box>
   
  );
}
