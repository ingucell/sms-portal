import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import BarChart from "../../components/Charts/BarChart";
import ProgressCircle from "../../components/Charts/ProgressCircle";
import useMediaQuery from "@mui/material/useMediaQuery";
import PageHeadings from "../../components/pageHeadings";

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
       

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 4"
          backgroundColor={colors.black[600]}
          p="10px"
        >
        
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexWrap="wrap"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.green[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
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
            Sales Quantity
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