import React, {useState} from 'react';
import { Box, Typography } from '@mui/material';
import transitions from '@material-ui/core/styles/transitions';

function Button({value}) {
  const root = {
      backgroundColor: '#ffffff',
      border: '0',
      padding: '20px',
      width: 'max-content',
      borderRadius: '0.5rem',
      cursor: 'pointer'
  }

  const hoverStyles = {
    backgroundColor: '#d2b7f3',
    transition : 'backgroundColor 3s'
  }

  const [hover, setHover] = useState(false)
  const hoverStyle = hover ? hoverStyles : null;

  return (
        <Box>
            <button style={{...root, ...hoverStyle}}
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
            >
                    <Typography
                    variant='h4'
                    >
                          {value}
                    </Typography>
            </button>
        </Box>
  );
}

export default Button;
