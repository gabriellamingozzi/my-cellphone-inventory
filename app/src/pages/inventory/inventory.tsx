import React, { useState, useEffect, use } from 'react';

import Typography from '@mui/material/Typography';
import Filters from './components/filters'
import InventoryTable from './components/inventoryTable'
import type Cellphone from '~/src/types/cellphone';
import type { SelectChangeEvent } from '@mui/material';

import { useDebounceValue } from 'usehooks-ts'

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
    const [brand, setBrand] = useDebounceValue('', 500);
    const [model, setModel] = useDebounceValue('', 500);
    const [storage, setStorage] = useState<string[]>([]);
    const [color, setColor] = useState<string[]>([]);
    const [minPrice, setMinPrice] = useDebounceValue('', 500);
    const [maxPrice, setMaxPrice] = useDebounceValue('', 500);

    const [inventoryList, setInventoryList] = useState<Cellphone[]>(phonesInInventory);

    const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBrand(event.target.value)
    }

    const handleModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModel(event.target.value)
    }

    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(event.target.value)
    }

     const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(event.target.value)
    }

    const handleMultiSelectChange = (
        event: SelectChangeEvent<string[]>,
        type: 'storage' | 'color'
    ) => {
        const {
            target: { value },
        } = event;

        const newValue = typeof value === 'string' ? value.split(',') : value;

        if (type === 'storage') {
            setStorage(newValue);
        } else if (type === 'color') {
            setColor(newValue);
        }
    };

    const handleFilterChange = () => {
        let filtered = phonesInInventory.filter((cellphone) => {
            // Check brand
            if (brand && brand.length > 0 && !cellphone.brand.toLowerCase().includes(brand.toLowerCase())) {
                return false;
            }

            // Check model
            if (model && model.length > 0 && !cellphone.model.includes(model)) {
                return false;
            }

            // Check storage
            if (storage.length > 0 && !storage.includes(cellphone.storage)) {
                return false;
            }

            // Check color
            if (color.length > 0 && !color.includes(cellphone.color)) {
                return false;
            }

            // Check price range
            if (minPrice && cellphone.price < Number(minPrice)) {
                return false;
            }
            if (maxPrice && cellphone.price > Number(maxPrice)) {
                return false;
            }

            return true; // Include this phone if all checks pass
        });

        setInventoryList(filtered);
    };

    useEffect(() => {
        handleFilterChange();
    }, [brand, model, storage, color, minPrice, maxPrice]);

    return (

        <>
            <Typography variant="h1" gutterBottom>
                Inventory
            </Typography>
            <Filters 
                handleMaxPriceChange={handleMaxPriceChange} 
                handleMinPriceChange={handleMinPriceChange} 
                handleModelChange={handleModelChange}
                handleMultiSelectChange={handleMultiSelectChange} 
                handleBrandChange={handleBrandChange} />
            <InventoryTable inventoryArray={inventoryList} />
        </>

    )


}