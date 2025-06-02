import React from "react"
import { TextField, Stack, Typography, Box, Paper, type SelectChangeEvent } from "@mui/material"
import MultipleSelectChip from "./multipleSelectChip"

const colors = [
    'Green',
    'Pink',
    'Black',
    'Blue',
    'Yellow',
    'White',
    'Natural Titanium',
    'Gray',
    'Violet',
    'Lavender',
    'Cream',
    'Mint',
    'Graphite',
    'Bay',
    'Porcelain',
    'Rose'
];

const storage = [
    '64 GB',
    '128 GB',
    '256 GB',
    '512 GB',
    '1 TB',
];

interface Props {
    handleBrandChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleModelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleMinPriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleMaxPriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleMultiSelectChange: (event: SelectChangeEvent<string[]>, type: "storage" | "color") => void;
}


export default function Filters(props: Props) {



    return (

        <Box p={2} mb={2}>

            <Stack justifyContent="space-between" alignItems="center" direction="row">
                <Typography>Filter by:</Typography>
                {/* brand */}
                <TextField id="brand" label="Brand" variant="outlined" onChange={(value: React.ChangeEvent<HTMLInputElement>) => props.handleBrandChange(value)} />

                {/* model */}
                <TextField id="model" label="Model" variant="outlined" onChange={(value: React.ChangeEvent<HTMLInputElement>) => props.handleModelChange(value)} />

                {/* storage*/}
                <MultipleSelectChip onChange={props.handleMultiSelectChange} label="Storage" options={storage} />


                {/* colors */}
                <MultipleSelectChip onChange={props.handleMultiSelectChange}  label="Color" options={colors} />

                {/* <TextField id="color" label="Color" variant="outlined" onChange={(value: React.ChangeEvent<HTMLInputElement>) => props.handleColorChange(value)} /> */}

                {/* price range */}
                <TextField id="min" label="Min Price" variant="outlined" onChange={(value: React.ChangeEvent<HTMLInputElement>) => props.handleMinPriceChange(value)} />
                <TextField id="max" label="Max Price" variant="outlined" onChange={(value: React.ChangeEvent<HTMLInputElement>) => props.handleMaxPriceChange(value)} />
            </Stack>

        </Box>

    )
}