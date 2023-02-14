import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const PageHeadings = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px"
     m= "0px 10px"
    >
      <Typography
        variant="h2"
        color={colors.blue[100]}
        fontWeight="bolder"
        width='max-content'
        sx={{ m: "0px 0px" , 
      fontSize: '2rem'}}
      >
        {title}
      </Typography>
      <Typography 
      variant="h4" 
      color={colors.black[100]}
      fontWeight='light'
      width="max-content"
      marginTop='4px'
      paddingBottom="30px"
      >
           
        {subtitle}
      </Typography>
    </Box>
  );
};

export default PageHeadings;
