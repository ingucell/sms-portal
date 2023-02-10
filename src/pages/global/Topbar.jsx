import { Box, useTheme, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import CSelector from ".";
import profilepic from './user.jpg'

const Topbar = () => {
 const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
// test commit user check



// 
  return (
    <Box
     display="flex" 
     justifyContent="space-between" p={1.5}
     backgroundColor = {colors.black[900]}
     >

    
{/* Search bar */}
     
       {/* <Box
        display="flex"
        backgroundColor={colors.black[900]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>  */}

     

      {/* ICONS */}
       <Box 
      display="flex"
      margin= "0px 75%"
      paddingRight = "-20rem"
      >
        {/* theme mode button */}
        {/* <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton> */}
        <CSelector />
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        {/* <IconButton>
          <SettingsOutlinedIcon />
        </IconButton> */}
        {/* <IconButton>
          <PersonOutlinedIcon />
        </IconButton> */}

         {/* profile part */}

         <hr />

         <Box display="flex" justifyContent="center" alignItems="center" marginLeft="1.5rem">
                <img
                  alt="profile-user"
                  width="50px"
                  height="50px"
                  src={profilepic}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box> 
              <Box textAlign="center" >
                <Typography
                  width='max-content'
                  marginLeft='7px'
                  variant="h6"
                  color={colors.black[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 3",
                    
                    }}
                >
                  Mathias Lawson
                </Typography>
                <Typography variant="h6" color={colors.black[300]} width='max-content' marginLeft='7px'>
                 Software Messenger
                </Typography>
              </Box>
      </Box>
    </Box>
  );
};

export default Topbar;