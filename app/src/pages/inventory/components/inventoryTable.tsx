import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type Cellphone from '~/src/types/cellphone';

interface Props{
    inventoryArray: Cellphone[]
}

export default function InventoryTable(props: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Brand</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Storage</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.inventoryArray.map((cellphone, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{cellphone.brand}</TableCell>
              <TableCell>{cellphone.model}</TableCell>
              <TableCell>{cellphone.storage}</TableCell>
              <TableCell>{cellphone.color}</TableCell>
              <TableCell>{cellphone.price.toLocaleString('en-US', {style: 'currency',currency: 'USD'})}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}