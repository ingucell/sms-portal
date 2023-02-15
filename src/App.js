import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./pages/global/Sidebar";
import Topbar from './pages/global/Topbar'
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import CreateMessage from './pages/Messages/createMessages'
import ViewMessages from "./pages/Messages/viewMessages";
import Voice from "./pages/Voice";
import SMS from "./pages/SMS";
import Groups from "./pages/Groups/Groups";
import CreateGroups from "./pages/Groups/CreateGroups";
import ContactList from "./pages/Contacts/ContactList";
import NewContact from "./pages/Contacts/NewContact";
import GroupMessaging from "./pages/SendMessage/GroupMessaging";
import {Routes, Route } from 'react-router-dom'

function App() {
  const [theme, colorMode] = useMode()

  return (
   <>
         <ColorModeContext.Provider value={colorMode}>
             <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="app">
                    <Sidebar /> 
                
                    <main className="content">
                            <Topbar />
                              <Routes>
                                <Route path="/" element={<Landing />}/>
                                <Route path="/sms" element={<SMS />}/>
                                <Route path="/dashboard" element={<Dashboard />}/>
                                <Route path="/voice" element={<Voice />}/>
                                <Route path="/createmessage" element={<CreateMessage />}/>
                                <Route path="/viewmessage" element={<ViewMessages />}/>
                                <Route path="/groups" element={<Groups />}/>
                                <Route path="/creategroups" element={<CreateGroups />}/>
                                <Route path="/newcontact" element={<NewContact />}/>
                                <Route path="/contactlist" element={<ContactList />}/>
                                <Route path="/groupmessaging" element={<GroupMessaging />}/>
                              </Routes>
                    </main>
                    </div>
             </ThemeProvider>    
         </ColorModeContext.Provider>
   </>
  );
}

export default App;
