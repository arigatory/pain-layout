import React from "react";
import {Moment} from "moment";
import TextField from '@mui/material/TextField';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import Calendar from "../icons/Calendar";
import ArrowSmallLeft from "../icons/ArrowSmallLeft";
import ArrowSmallRight from "../icons/ArrowSmallRight";

export default function CDatePicker(props: {
    label: string,
    value: Moment | null,
    onChange: (val: Moment | null) => void,
    fullWidth?: boolean,
}) {
    return (
        <LocalizationProvider
            dateAdapter={AdapterMoment}
            adapterLocale="ru"
        >
            <DatePicker
                components={{
                    OpenPickerIcon: Calendar,
                    LeftArrowIcon: ArrowSmallLeft,
                    RightArrowIcon: ArrowSmallRight
                }}
                views={['day']}
                label={props.label}
                value={props.value}
                onChange={props.onChange}
                renderInput={(params) => <TextField
                    {...params}
                    variant="standard"
                    fullWidth={props.fullWidth}
                />}
                disableFuture
            />
        </LocalizationProvider>
    );
}
