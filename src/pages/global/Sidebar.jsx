import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SmsIcon from '@mui/icons-material/Sms';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
//import profilepic from  './user.jpg'

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.green[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("SMS");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.green[500]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#ffffff !important",
        },
        "& .pro-menu-item.active": {
          color: "#ffffff !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 50px 0",
              color: colors.black[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.black[500]}>
                  MATHIAS SCRIPTED
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="SMS"
              to="/sms"
              icon={<SmsIcon />}
              selected={selected}
              setSelected={setSelected}
            />


            <Item
              title="Voice"
              to="/voice"
              icon={<LocalPhoneIcon />}
              selected={selected}
              setSelected={setSelected}
            />

           <Item
              title="Dashboard"
              to="/dashboard"
              icon={<SpeedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            
            

   {/*Messages  */}
            <SubMenu title='Messages'
             style={{color: `${colors.green[100]}`}}
             icon={<EmailOutlinedIcon />}
             >
                 <Item
              title="Create message"
              to="/createmessage"
              selected={selected}
              setSelected={setSelected}
                />

            <Item
              title="View message"
              to="/viewmessage"
              selected={selected}
              setSelected={setSelected}
            />

      
            </SubMenu>


           
{/* Groups */}
            <SubMenu title='Groups' 
            style={{color: `${colors.green[100]}`}}
            icon={<PeopleOutlinedIcon />}
            >

            <Item
              title="Groups"
              to="/groups"
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Create Groups"
              to="/creategroups"
              selected={selected}
              setSelected={setSelected}
            />
      
            </SubMenu>

{/* Contacts */}
            <SubMenu title='Contacts' 
            style={{color: `${colors.green[100]}`}}
            icon={<PersonIcon />}
            >

            <Item
              title="New Contact"
              to="/newcontact"
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Import from Excel"
              to="/importfromexcel"
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Contact List"
              to="/contactlist"
              selected={selected}
              setSelected={setSelected}
            />
{/* 
           <Item
              title="Export Contacts"
              to="/exportcontacts"
              selected={selected}
              setSelected={setSelected}
            /> */}
            </SubMenu>


{/* Send Message */}
            <SubMenu title='Send Message'
             style={{color: `${colors.green[100]}`}}
             icon={<MessageIcon />}
             >
                        
            <Item
              title="Group Messaging"
              to="/groupmessaging"
              selected={selected}
              setSelected={setSelected}
            />

          <Item
              title="Quick SMS"
              to="/quicksms"
              selected={selected}
              setSelected={setSelected}
            />

          <Item
              title="Excel Messaging"
              to="/excelmessaging"
              selected={selected}
              setSelected={setSelected}
            />

          <Item
              title="Register Sender ID"
              to="/registersendid"
              selected={selected}
              setSelected={setSelected}
            />

          <Item
              title="Sender ID List"
              to="/senderidlist"
              selected={selected}
              setSelected={setSelected}
            />

         <Item
              title="Scheduled"
              to="/scheduled"
              selected={selected}
              setSelected={setSelected}
            />

            </SubMenu>


{/* Stats & Reporting */}
            <SubMenu 
            title='Stats & Reporting'
            style={{color: `${colors.green[100]}`}}
            icon={<QueryStatsIcon />}
            >
                        
             <Item
                 title="Graphical Report"
                 to="/graphicalreport"
                 selected={selected}
                 setSelected={setSelected}
             />


           <Item
              title="Message Type Sent"
              to="/messagetypesent"
              selected={selected}
              setSelected={setSelected}
            />

          <Item
              title="Sender Name"
              to="/sendername"
              selected={selected}
              setSelected={setSelected}
            />

           <Item
              title="SMS sent"
              to="/smssent"
              selected={selected}
              setSelected={setSelected}
            />

          <Item
              title="Campaigns"
              to="/campaigns"
              selected={selected}
              setSelected={setSelected}
            />

          <Item
              title="Top Up History"
              to="/touphistory"
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Payments"
              to="/payment"
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Delivery Reports"
              to="/deliveryreports"
              selected={selected}
              setSelected={setSelected}
            />
            
             </SubMenu>
            <Item
              title="Help"
              to="/help"
              icon={<QuestionMarkIcon />}
              selected={selected}
              setSelected={setSelected}
            />
                
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;