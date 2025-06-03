import React, { useState, useEffect, use } from 'react';

import { Typography } from '@mui/material';
import Filters from './components/filters'
import InventoryTable from './components/inventoryTable'
import type Cellphone from '~/src/types/cellphone';
import type { SelectChangeEvent } from '@mui/material';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

import { useDebounceValue } from 'usehooks-ts'

const phonesInInventory: Cellphone[] = [
    { brand: "Apple", model: "iPhone 15", storage: "128 GB", color: "Green", price: 829.99 },
    { brand: "Apple", model: "iPhone 15", storage: "128 GB", color: "Pink", price: 829.99 },
    { brand: "Apple", model: "iPhone 15", storage: "128 GB", color: "Black", price: 829.99 },
    { brand: "Apple", model: "iPhone 15", storage: "128 GB", color: "Blue", price: 829.99 },
    { brand: "Apple", model: "iPhone 15", storage: "128 GB", color: "Yellow", price: 829.99 },
    { brand: "Apple", model: "iPhone 15", storage: "256 GB", color: "Green", price: 929.99 },
    { brand: "Apple", model: "iPhone 15", storage: "256 GB", color: "Pink", price: 929.99 },
    { brand: "Apple", model: "iPhone 15", storage: "256 GB", color: "Black", price: 929.99 },
    { brand: "Apple", model: "iPhone 15", storage: "256 GB", color: "Blue", price: 929.99 },
    { brand: "Apple", model: "iPhone 15", storage: "256 GB", color: "Yellow", price: 929.99 },
    { brand: "Apple", model: "iPhone 15", storage: "512 GB", color: "Green", price: 1129.99 },
    { brand: "Apple", model: "iPhone 15", storage: "512 GB", color: "Pink", price: 1129.99 },
    { brand: "Apple", model: "iPhone 15", storage: "512 GB", color: "Black", price: 1129.99 },
    { brand: "Apple", model: "iPhone 15", storage: "512 GB", color: "Blue", price: 1129.99 },
    { brand: "Apple", model: "iPhone 15", storage: "512 GB", color: "Yellow", price: 1129.99 },
    { brand: "Apple", model: "iPhone 15 Plus", storage: "128 GB", color: "Green", price: 929.99 },
    { brand: "Apple", model: "iPhone 15 Plus", storage: "128 GB", color: "Pink", price: 929.99 },
    { brand: "Apple", model: "iPhone 15 Plus", storage: "128 GB", color: "Black", price: 929.99 },
    { brand: "Apple", model: "iPhone 15 Plus", storage: "128 GB", color: "Blue", price: 929.99 },
    { brand: "Apple", model: "iPhone 15 Plus", storage: "128 GB", color: "Yellow", price: 929.99 },
    { brand: "Apple", model: "iPhone 15 Plus", storage: "256 GB", color: "Green", price: 1029.99 },
    { brand: "Apple", model: "iPhone 15 Plus", storage: "256 GB", color: "Pink", price: 1029.99 },
    { brand: "Apple", model: "iPhone 15 Plus", storage: "256 GB", color: "Black", price: 1029.99 },
    { brand: "Apple", model: "iPhone 15 Plus", storage: "256 GB", color: "Blue", price: 1029.99 },
    { brand: "Apple", model: "iPhone 15 Plus", storage: "256 GB", color: "Yellow", price: 1029.99 },
    { brand: "Apple", model: "iPhone 15 Plus", storage: "512 GB", color: "Green", price: 1229.99 },
    { brand: "Apple", model: "iPhone 15 Plus", storage: "512 GB", color: "Pink", price: 1229.99 },
    { brand: "Apple", model: "iPhone 15 Plus", storage: "512 GB", color: "Black", price: 1229.99 },
    { brand: "Apple", model: "iPhone 15 Plus", storage: "512 GB", color: "Blue", price: 1229.99 },
    { brand: "Apple", model: "iPhone 15 Plus", storage: "512 GB", color: "Yellow", price: 1229.99 },
    { brand: "Apple", model: "iPhone 15 Pro", storage: "128 GB", color: "White Titanium", price: 999.99 },
    { brand: "Apple", model: "iPhone 15 Pro", storage: "128 GB", color: "Blue Titanium", price: 999.99 },
    { brand: "Apple", model: "iPhone 15 Pro", storage: "128 GB", color: "Black Titanium", price: 999.99 },
    { brand: "Apple", model: "iPhone 15 Pro", storage: "128 GB", color: "Natural Titanium", price: 999.99 },
    { brand: "Apple", model: "iPhone 15 Pro", storage: "256 GB", color: "White Titanium", price: 1029.99 },
    { brand: "Apple", model: "iPhone 15 Pro", storage: "256 GB", color: "Blue Titanium", price: 1029.99 },
    { brand: "Apple", model: "iPhone 15 Pro", storage: "256 GB", color: "Black Titanium", price: 1029.99 },
    { brand: "Apple", model: "iPhone 15 Pro", storage: "256 GB", color: "Natural Titanium", price: 1029.99 },
    { brand: "Apple", model: "iPhone 15 Pro", storage: "512 GB", color: "White Titanium", price: 1229.99 },
    { brand: "Apple", model: "iPhone 15 Pro", storage: "512 GB", color: "Blue Titanium", price: 1229.99 },
    { brand: "Apple", model: "iPhone 15 Pro", storage: "512 GB", color: "Black Titanium", price: 1229.99 },
    { brand: "Apple", model: "iPhone 15 Pro", storage: "512 GB", color: "Natural Titanium", price: 1229.99 },
    { brand: "Apple", model: "iPhone 15 Pro", storage: "1 TB", color: "White Titanium", price: 1429.99 },
    { brand: "Apple", model: "iPhone 15 Pro", storage: "1 TB", color: "Blue Titanium", price: 1429.99 },
    { brand: "Apple", model: "iPhone 15 Pro", storage: "1 TB", color: "Black Titanium", price: 1429.99 },
    { brand: "Apple", model: "iPhone 15 Pro", storage: "1 TB", color: "Natural Titanium", price: 1429.99 },
    { brand: "Samsung", model: "Galaxy S24", storage: "128 GB", color: "Marble Gray", price: 799.99 },
    { brand: "Samsung", model: "Galaxy S24", storage: "128 GB", color: "Cobalt Violet", price: 799.99 },
    { brand: "Samsung", model: "Galaxy S24", storage: "128 GB", color: "Amber Yellow", price: 799.99 },
    { brand: "Samsung", model: "Galaxy S24", storage: "128 GB", color: "Onyx Black", price: 799.99 },
    { brand: "Samsung", model: "Galaxy S24", storage: "256 GB", color: "Marble Gray", price: 859.99 },
    { brand: "Samsung", model: "Galaxy S24", storage: "256 GB", color: "Cobalt Violet", price: 859.99 },
    { brand: "Samsung", model: "Galaxy S24", storage: "256 GB", color: "Amber Yellow", price: 859.99 },
    { brand: "Samsung", model: "Galaxy S24", storage: "256 GB", color: "Onyx Black", price: 859.99 },
    { brand: "Samsung", model: "Galaxy S24+", storage: "256 GB", color: "Marble Gray", price: 999.99 },
    { brand: "Samsung", model: "Galaxy S24+", storage: "256 GB", color: "Cobalt Violet", price: 999.99 },
    { brand: "Samsung", model: "Galaxy S24+", storage: "256 GB", color: "Amber Yellow", price: 999.99 },
    { brand: "Samsung", model: "Galaxy S24+", storage: "256 GB", color: "Onyx Black", price: 999.99 },
    { brand: "Samsung", model: "Galaxy S24+", storage: "512 GB", color: "Marble Gray", price: 1119.99 },
    { brand: "Samsung", model: "Galaxy S24+", storage: "512 GB", color: "Cobalt Violet", price: 1119.99 },
    { brand: "Samsung", model: "Galaxy S24+", storage: "512 GB", color: "Amber Yellow", price: 1119.99 },
    { brand: "Samsung", model: "Galaxy S24+", storage: "512 GB", color: "Onyx Black", price: 1119.99 },
    { brand: "Samsung", model: "Galaxy S24 Ultra", storage: "256 GB", color: "Titanium Black", price: 1299.99 },
    { brand: "Samsung", model: "Galaxy S24 Ultra", storage: "256 GB", color: "Titanium Violet", price: 1299.99 },
    { brand: "Samsung", model: "Galaxy S24 Ultra", storage: "256 GB", color: "Titanium Yellow", price: 1299.99 },
    { brand: "Samsung", model: "Galaxy S24 Ultra", storage: "256 GB", color: "Titanium Gray", price: 1299.99 },
    { brand: "Samsung", model: "Galaxy S24 Ultra", storage: "512 GB", color: "Titanium Black", price: 1419.99 },
    { brand: "Samsung", model: "Galaxy S24 Ultra", storage: "512 GB", color: "Titanium Violet", price: 1419.99 },
    { brand: "Samsung", model: "Galaxy S24 Ultra", storage: "512 GB", color: "Titanium Yellow", price: 1419.99 },
    { brand: "Samsung", model: "Galaxy S24 Ultra", storage: "512 GB", color: "Titanium Gray", price: 1419.99 },
    { brand: "Samsung", model: "Galaxy S23", storage: "128 GB", color: "Green", price: 699.99 },
    { brand: "Samsung", model: "Galaxy S23", storage: "128 GB", color: "Lavender", price: 699.99 },
    { brand: "Samsung", model: "Galaxy S23", storage: "128 GB", color: "Cream", price: 699.99 },
    { brand: "Samsung", model: "Galaxy S23", storage: "128 GB", color: "Phantom Black", price: 699.99 },
    { brand: "Samsung", model: "Galaxy S23 Ultra", storage: "512 GB", color: "Green", price: 1379.99 },
    { brand: "Samsung", model: "Galaxy A15 5G", storage: "128 GB", color: "Blue Black", price: 199.99 },
    { brand: "Samsung", model: "Galaxy Z Fold5", storage: "256 GB", color: "Phantom Black", price: 1799.99 },
    { brand: "Samsung", model: "Galaxy Z Fold5", storage: "256 GB", color: "Cream", price: 1799.99 },
    { brand: "Samsung", model: "Galaxy Z Fold5", storage: "256 GB", color: "Icy Blue", price: 1799.99 },
    { brand: "Samsung", model: "Galaxy Z Fold5", storage: "512 GB", color: "Phantom Black", price: 1919.99 },
    { brand: "Samsung", model: "Galaxy Z Fold5", storage: "512 GB", color: "Cream", price: 1919.99 },
    { brand: "Samsung", model: "Galaxy Z Fold5", storage: "512 GB", color: "Icy Blue", price: 1919.99 },
    { brand: "Samsung", model: "Galaxy Z Flip5", storage: "256 GB", color: "Cream", price: 999.99 },
    { brand: "Samsung", model: "Galaxy Z Flip5", storage: "256 GB", color: "Mint", price: 999.99 },
    { brand: "Samsung", model: "Galaxy Z Flip5", storage: "256 GB", color: "Lavender", price: 999.99 },
    { brand: "Samsung", model: "Galaxy Z Flip5", storage: "256 GB", color: "Graphite", price: 999.99 },
    { brand: "Samsung", model: "Galaxy Z Flip5", storage: "256 GB", color: "Cream", price: 1119.99 },
    { brand: "Samsung", model: "Galaxy Z Flip5", storage: "256 GB", color: "Mint", price: 1119.99 },
    { brand: "Samsung", model: "Galaxy Z Flip5", storage: "256 GB", color: "Lavender", price: 1119.99 },
    { brand: "Samsung", model: "Galaxy Z Flip5", storage: "256 GB", color: "Graphite", price: 1119.99 },
    { brand: "Google", model: "Pixel 8 Pro", storage: "128 GB", color: "Obsidian Black", price: 999.99 },
    { brand: "Google", model: "Pixel 8 Pro", storage: "256 GB", color: "Obsidian Black", price: 10599.99 },
    { brand: "Google", model: "Pixel 8 Pro", storage: "512 GB", color: "Obsidian Black", price: 1179.99 },
    { brand: "Google", model: "Pixel 8 Pro", storage: "128 GB", color: "Bay", price: 999.99 },
    { brand: "Google", model: "Pixel 8 Pro", storage: "256 GB", color: "Bay", price: 1059.99 },
    { brand: "Google", model: "Pixel 8 Pro", storage: "512 GB", color: "Bay", price: 1179.99 },
    { brand: "Google", model: "Pixel 8 Pro", storage: "128 GB", color: "Porcelain", price: 999.99 },
    { brand: "Google", model: "Pixel 8 Pro", storage: "256 GB", color: "Porcelain", price: 1059.99 },
    { brand: "Google", model: "Pixel 8 Pro", storage: "512 GB", color: "Porcelain", price: 1179.99 },
    { brand: "Google", model: "Pixel 8", storage: "128 GB", color: "Hazel Gray", price: 799.99 },
    { brand: "Google", model: "Pixel 8", storage: "256 GB", color: "Hazel Gray", price: 859.99 },
    { brand: "Google", model: "Pixel 8", storage: "128 GB", color: "Obsidian Black", price: 799.99 },
    { brand: "Google", model: "Pixel 8", storage: "256 GB", color: "Obsidian Black", price: 859.99 },
    { brand: "Google", model: "Pixel 8", storage: "128 GB", color: "Rose", price: 799.99 },
    { brand: "Google", model: "Pixel 8", storage: "256 GB", color: "Rose", price: 859.99 },
    { brand: "Google", model: "Pixel Fold", storage: "256 GB", color: "Obsidian Black", price: 1799.99 },
    { brand: "Google", model: "Pixel Fold", storage: "512 GB", color: "Obsidian Black", price: 1919.99 },
    { brand: "Google", model: "Pixel 7a", storage: "256 GB", color: "Mineral Gray", price: 549.99 },
    { brand: "Google", model: "Pixel 7 Pro", storage: "256 GB", color: "Mineral Gray", price: 1099.99 },
    { brand: "Google", model: "Pixel 7", storage: "256 GB", color: "Mineral Gray", price: 699.99 },
    { brand: "Google", model: "Pixel 6a", storage: "256 GB", color: "Mineral Gray", price: 399.99 },
    { brand: "Google", model: "Pixel 6 Pro", storage: "256 GB", color: "Mineral Gray", price: 999.99 },
    { brand: "Google", model: "Pixel 6", storage: "256 GB", color: "Mineral Gray", price: 799.99 },
    { brand: "Motorola", model: "edge", storage: "256 GB", color: "Mineral Gray", price: 659.99 },
    { brand: "Motorola", model: "edge 5G UW", storage: "128 GB", color: "Nebula Blue", price: 549.99 },
    { brand: "Motorola", model: "edge 5G UW", storage: "256 GB", color: "Nebula Blue", price: 599.99 },
    { brand: "Motorola", model: "moto g stylus 5G", storage: "128 GB", color: "Steel Blue", price: 399.99 },
    { brand: "Motorola", model: "edge+ 5G UW", storage: "128 GB", color: "Stardust Gray", price: 849.99 },
    { brand: "Motorola", model: "edge+ 5G UW", storage: "128 GB", color: "Cosmos Blue", price: 849.99 },
    { brand: "Motorola", model: "edge+ 5G UW", storage: "256 GB", color: "Stardust Gray", price: 929.99 },
    { brand: "Motorola", model: "edge+ 5G UW", storage: "256 GB", color: "Cosmos Blue", price: 929.99 },
    { brand: "Motorola", model: "one 5G UW ace", storage: "256 GB", color: "Mineral Gray", price: 299.99 },
    { brand: "Motorola", model: "edge+", storage: "256 GB", color: "Mineral Gray", price: 869.99 },
    { brand: "Kyocera", model: "DuraForce PRO 3", storage: "128 GB", color: "Black", price: 899.99 },
    { brand: "Kyocera", model: "DuraSport 5G UW", storage: "64 GB", color: "Black", price: 579.99 },
    { brand: "Kyocera", model: "DuraForce Ultra 5G UW", storage: "128 GB", color: "Black", price: 899.99 },
    { brand: "TCL", model: "30 V 5G", storage: "128 GB", color: "Midnight Gray", price: 299.99 },
    { brand: "TCL", model: "10 5G UW", storage: "128 GB", color: "Diamond Gray", price: 399.99 }
];


export default function Inventory() {
    const [brand, setBrand] = useDebounceValue('', 500);
    const [model, setModel] = useDebounceValue('', 500);
    const [storage, setStorage] = useState<string[]>([]);
    const [color, setColor] = useState<string[]>([]);
    const [minPrice, setMinPrice] = useDebounceValue('', 500);
    const [maxPrice, setMaxPrice] = useDebounceValue('', 500);

    const [minPriceError, minPriceSetError] = useState(false);
    const [minPriceHelperText, minPriceSetHelperText] = useState('');

    const [maxPriceError, maxPriceSetError] = useState(false);
    const [maxPriceHelperText, maxPriceSetHelperText] = useState('');

    const [inventoryList, setInventoryList] = useState<Cellphone[]>(phonesInInventory);

    const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBrand(event.target.value)
    }

    const handleModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModel(event.target.value)
    }



    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(event.target.value)
        if (isNaN(Number(event.target.value))) {
            minPriceSetError(true);
            minPriceSetHelperText('Min price input must be a number');
        } else {
            minPriceSetError(false);
            minPriceSetHelperText('');
        }
    }

    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(event.target.value)
        if (isNaN(Number(event.target.value))) {
            maxPriceSetError(true);
            maxPriceSetHelperText('Max price input must be a number');
        } else {
            maxPriceSetError(false);
            maxPriceSetHelperText('');
        }
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
            if (model && model.length > 0 && !cellphone.model.toLowerCase().includes(model.toLowerCase())) {
                return false;
            }

            // Check storage
            if (storage.length > 0 && !storage.includes(cellphone.storage)) {
                return false;
            }

            // Check color
            if (color.length > 0 && !color.some(selectedColor => cellphone.color.includes(selectedColor))) {
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
                Inventory{' '} 
                <SmartphoneIcon sx={{fontSize: 70,verticalAlign: 'middle', color: '#121212' }} />
            </Typography>
            <Filters
                minPriceHelperText={minPriceHelperText}
                minPriceError={minPriceError}
                maxPriceError={maxPriceError}
                maxPriceHelperText={maxPriceHelperText}
                handleMaxPriceChange={handleMaxPriceChange}
                handleMinPriceChange={handleMinPriceChange}
                handleModelChange={handleModelChange}
                handleMultiSelectChange={handleMultiSelectChange}
                handleBrandChange={handleBrandChange} />
            <InventoryTable inventoryArray={inventoryList} />
        </>

    );


}


