import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React from 'react';
import { columns, rows } from './data';

const Invoices = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx:"auto" }}>
        <DataGrid
        checkboxSelection
        slots={{
          toolbar: GridToolbar
        }}
          rows={rows}
          //@ts-ignore
          columns={columns}
        />
      </Box>
  );
}

export default Invoices;
