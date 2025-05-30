import React from 'react';

import Typography from '@mui/material/Typography';
import Filters from './components/filters'
import InventoryTable from './components/inventoryTable'

const phonesInInventory = [
  {
    brand: "Apple",
    model: "iPhone 15",
    storage: "128 GB",
    color: "Green",
    price: 829.99
  },
  {
    brand: "Apple",
    model: "iPhone 15",
    storage: "128 GB",
    color: "Pink",
    price: 829.99
  },
  {
    brand: "Apple",
    model: "iPhone 15",
    storage: "128 GB",
    color: "Black",
    price: 829.99
  },
  {
    brand: "Apple",
    model: "iPhone 15",
    storage: "128 GB",
    color: "Blue",
    price: 829.99
  },
  {
    brand: "Apple",
    model: "iPhone 15",
    storage: "128 GB",
    color: "Yellow",
    price: 829.99
  }
];


export default function Inventory() {

    return (

        <>
            <Typography variant="h1" gutterBottom>
                Inventory
            </Typography>
            <Filters/>
            <InventoryTable inventoryArray={phonesInInventory} />
        </>

    )


}