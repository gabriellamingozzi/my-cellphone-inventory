import React from "react"
import { TextField, Button, Stack, Typography, Box, Tooltip, Paper, type SelectChangeEvent } from "@mui/material"
import MultipleSelectChip from "./multipleSelectChip"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import FilterListIcon from '@mui/icons-material/FilterList';

import { createTheme, ThemeProvider } from '@mui/material/styles';

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
].sort();

const storage = [
    '64 GB',
    '128 GB',
    '256 GB',
    '512 GB',
    '1 TB',
];

const darkDrawerTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


interface Props {
    handleBrandChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleModelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleMinPriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleMaxPriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleMultiSelectChange: (event: SelectChangeEvent<string[]>, type: "storage" | "color") => void;
    minPriceError?: boolean;
    minPriceHelperText?: string;
    maxPriceError?: boolean;
    maxPriceHelperText?: string;
}

const borderRadius = 8;


export default function Filters(props: Props) {



    return (

        <>
            <ThemeProvider theme={darkDrawerTheme}>
                <Accordion defaultExpanded sx={{
                    borderTopLeftRadius: borderRadius,
                    borderTopRightRadius: borderRadius,
                    borderBottomLeftRadius: borderRadius,
                    borderBottomRightRadius: borderRadius, 
                    mb: 3
                }}>
                    <AccordionSummary >
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                Filters <FilterListIcon />
                            </Typography>
                        </Box>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Stack direction="row">
                            {/* brand */}
                            <TextField sx={{ m: 1, width: 300 }} id="brand" label="Brand" variant="outlined" onChange={(value: React.ChangeEvent<HTMLInputElement>) => props.handleBrandChange(value)} />

                            {/* model */}
                            <TextField sx={{ m: 1, width: 300 }} id="model" label="Model" variant="outlined" onChange={(value: React.ChangeEvent<HTMLInputElement>) => props.handleModelChange(value)} />

                            {/* storage*/}
                            <MultipleSelectChip onChange={props.handleMultiSelectChange} label="Storage" options={storage} />


                            {/* colors */}
                            <MultipleSelectChip onChange={props.handleMultiSelectChange} label="Color" options={colors} />

                            <TextField
                                sx={{ m: 1, width: 300 }}
                                id="min"
                                label="Min Price"
                                variant="outlined"
                                error={props.minPriceError}
                                helperText={props.minPriceHelperText} 
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    props.handleMinPriceChange(e)
                                }
                            />
                             <TextField
                                sx={{ m: 1, width: 300 }}
                                id="max"
                                label="Max Price"
                                variant="outlined"
                                error={props.maxPriceError}
                                helperText={props.maxPriceHelperText}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    props.handleMaxPriceChange(e)
                                }
                            />
                        </Stack>


                    </AccordionDetails>
                </Accordion>

            </ThemeProvider>


        </>


    )
}