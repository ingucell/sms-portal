import React from 'react';
import {Box} from '@mui/material'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';

import {
    IconFlagTR,
    IconFlagDE,
    IconFlagUS
} from 'material-ui-flags';


const languages = [
  { code: 'en', name: 'English', flag: 'us' },
  { code: 'fr', name: 'French', flag: 'fr' },
  { code: 'es', name: 'Spanish', flag: 'es' },
  { code: 'de', name: 'German', flag: 'de' },
  { code: 'it', name: 'Italian', flag: 'it' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CSelector() {
  const classes = useStyles();
  const [language, setLanguage] = React.useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box 
      height='2px'
      width='max-content'
      margin='-1rem 5px'
      fontSize='1px'
    >
       
          <FormControl className={classes.formControl} fontSize='1px'>
            <InputLabel id="language-label">Language</InputLabel>
            <Select
              labelId="language-label"
              id="language-select"
              value={language}
              onChange={handleChange}
              fontSize='1px'
            >
              {languages.map((lang) => (
                <MenuItem key={lang.code} value={lang.code} fontSize='1px'>
                  {/* <FlagIcon fontSize="small" className={`flag-icon flag-icon-${lang.flag}`} /> */}
                 {lang.code === 'en' ? <Box display='flex' gap="7px"><IconFlagUS  /> 
                   <Typography marginRight='3px'  fontSize='1px'>
                         {lang.name}
                   </Typography>
                 </Box>  : lang.code === 'de' ? <Box display='flex' gap="7px"><IconFlagDE /> 
                   <Typography marginRight='3px' fontSize='1px'>
                         {lang.name}
                   </Typography>
                 </Box>  : ""}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
       
    </Box>
  );
}
