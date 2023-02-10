import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px"
    >
      <Typography
        variant="h1"
        color={colors.black[900]}
        fontWeight="bolder"
        width='max-content'
        sx={{ m: "0 0 5px 0" , 
      fontSize: '4rem'}}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.black[900]} fontWeight='light' width='45%' marginTop='20px'>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
