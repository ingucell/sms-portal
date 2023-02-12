import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./pages/global/Sidebar";
import Topbar from './pages/global/Topbar'
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import SMS from "./pages/SMS";
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
                              </Routes>
                    </main>
                    </div>
             </ThemeProvider>    
         </ColorModeContext.Provider>
   </>
  );
}

export default App;
