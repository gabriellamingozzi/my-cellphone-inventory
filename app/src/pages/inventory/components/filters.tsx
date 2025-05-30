import React from "react"
import { TextField, Stack, Typography} from "@mui/material"
import MultipleSelectChip from "./multipleSelectChip"

const colors = [
    'Black',
    'Silver',
    'White',
    'Blue',
];

const storage = [
    '64 GB',
    '128 GB',
    '256 GB',
    '512 GB',
    '1 TB',
];



export default function Filters() {

    return (
        <>

            <Stack justifyContent="space-between" alignItems="center"  direction="row">
                <Typography>Filter by:</Typography>
                {/* brand */}
                <TextField id="brand" label="Brand" variant="outlined" />

                {/* model */}
                <TextField id="model" label="Model" variant="outlined" />

                {/* storage*/}
                <MultipleSelectChip label="Storage" options={storage} />


                {/* colors */}
                <MultipleSelectChip label="Color" options={colors} />

                {/* price range */}
                <TextField id="min" label="Min Price" variant="outlined" />
                <TextField id="max" label="Max Price" variant="outlined" />
            </Stack>
        </>
    )
}