import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import BarChart from "../../components/Charts/BarChart";
import useMediaQuery from "@mui/material/useMediaQuery";
import PageHeadings from "../../components/pageHeadings";
import PieChart from "../../components/Charts/PieChart";

const SMS = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const iphoneSE = useMediaQuery("(min-width:300px)");
  
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <PageHeadings title="SMS" subtitle="View all your SMS here!" />

      </Box>

      {/* GRID & CHARTS */}

    
      <Box
        display="grid"
        gridAutoRows="140px"
        gap="10px"
        sx={{
          gridTemplateColumns: iphoneSE ? "repeat(8, 1fr)" : "repeat(12, 1fr)", 
        }}
      >
  
        {/* Pie Chart */}
        <Box
          gridColumn="span 4"
          gridRow="span 4"
          backgroundColor={colors.black[600]}
          p="10px"
        >
        
          <Typography variant="h5" fontWeight="600">
            Recent SMS Campaings
          </Typography>

          <PieChart />
        
        </Box>
        {/* BarChart */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.black[600]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
          Billing Summary  
          </Typography>
          <Box height="37rem" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
       
      </Box>
    </Box>
  );
};

export default SMS;