import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const PageHeadings = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px"
     m= "0px 30px"
    >
      <Typography
        variant="h2"
        color={colors.blue[100]}
        fontWeight="bolder"
        width='max-content'
        sx={{ m: "0px 0px" , 
      fontSize: '4rem'}}
      >
        {title}
      </Typography>
      <Typography 
      variant="h4" 
      color={colors.black[100]}
       fontWeight='light' width='45%'
        marginTop='4px'>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default PageHeadings;
