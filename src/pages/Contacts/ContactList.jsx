import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { GroupListings, mockContacts } from "../../data/mockData";
import PageHeadings from "../../components/pageHeadings";
import { useTheme } from "@mui/material";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const ContactList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 0.8,
      cellClassName: "name-column--cell",
    },
    {
      field: "mobile",
      headerName: "Mobile",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row: { actions } }) => {
        return (
          <> <Box
          width="20%"
          m="3px 0px"
          p="5px"
          display="flex"
          justifyContent="center"        
          borderRadius="4px"
        >
          {<DeleteForeverOutlinedIcon style={{color: 'red', cursor: 'pointer', marginLeft: '0.5rem'}}/>}
          {<ModeEditIcon style={{color: 'green', cursor: 'pointer', marginLeft: '0.5rem'}}/>}
        </Box>
       
          </>
         

        );
      },
    },
  ];

  return (
    <Box m="20px">
      <PageHeadings
        title="Group Listings"
        subtitle="View your groups listing here!"
      />
      <Box
        m="15px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            
          },
          // "& .MuiDataGrid-virtualScrollerRenderZone": {
          //   backgroundColor: `${colors.blue[600]} !important`,    
          // },
          "& .name-column--cell": {
            color: colors.black[100],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.green[500],
            color: 'white',
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.black[500],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blue[900],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.green[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.black[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={GroupListings}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default ContactList;
