import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import type Cellphone from '~/src/types/cellphone';
import { useSortableTable } from "../../../hooks/useSortableTable";
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  inventoryArray: Cellphone[]
}

export default function InventoryTable(props: Props) {
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [tableData, handleSorting] = useSortableTable(props.inventoryArray);

  const columnHeaders = ['brand', 'model', 'storage', 'color', 'price']

  const handleSort = (field: string) => {
    const order = field === sortField && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
    handleSorting(field, order);
  };


  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:hover': {
      backgroundColor: '#E0F2F7',
      cursor: 'pointer', 
    },
  }));


  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
              {columnHeaders.map((field) => (
                <TableCell key={field}>
                  <TableSortLabel
                    active={sortField === field}
                    direction={sortField === field ? sortOrder : "asc"}
                    onClick={() => handleSort(field)}
                  >
                    {field.toUpperCase()}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.length > 0 && tableData.map((cellphone: Cellphone, index: number) => (

              <StyledTableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell >{cellphone.brand}</TableCell>
                <TableCell>{cellphone.model}</TableCell>
                <TableCell>{cellphone.storage}</TableCell>
                <TableCell>{cellphone.color}</TableCell>
                <TableCell>{cellphone.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {tableData.length === 0 &&

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center', 
            marginTop: 3,
          }}
        >
          <SearchIcon sx={{ fontSize: 80,  color: '#121212' }} />
          <Typography variant="h6" component="p" sx={{ mt: 2 }}>
            No Matching Search Results
          </Typography>
        </Box>
      }
    </>
  );
}