import React, {useState} from "react";
import {styled} from "@mui/system";
import BoxFlex from "../layout/BoxFlex";
import {Button, Dialog, DialogContent, Typography, typographyClasses} from "@mui/material";
import CChip from "../data-display/CChip";
import BoxFlexColumn from "../layout/BoxFlexColumn";
import StackChip from "../layout/StackChip";
import MobileOnly from "../layout/MobileOnly";
import FilterIcon from "../icons/Filter";

const FilterContainer = styled(BoxFlex)({
    marginBottom: 50,
    "@media (max-width: 899px)": {
        display: "none",
    },
}) as typeof BoxFlex

const FilterItem = styled(BoxFlexColumn)(({theme}) => ({
    flex: "1 1 0",
    width: 0,
    gridGap: 20,

    "& .MuiBox-root": {
        padding: "0 14px 0 14px",
    },
    "&:first-of-type": {
        "& > div": {
            paddingLeft: 0,
        },
        [`& .${typographyClasses.root}`]: {
            borderRadius: "30px 0 0 0",
        },
    },
    "&:last-of-type": {
        "& > div": {
            paddingRight: 0,
        },
        [`& .${typographyClasses.root}`]: {
            borderRadius: "0 30px 0 0",
        },
    },
    [`&:not(:last-of-type) .${typographyClasses.root}`]: {
        borderRight: "none",
    },
})) as typeof BoxFlex

const FilterTitle = styled(Typography)(({theme}) => ({
    padding: "20px 20px 0 20px",
    width: "100%",
    border: `1px solid ${theme.palette.border.main}`,
    borderBottom: "none",
})) as typeof Typography

const Filter = (props: {
    filterGroups: {
        title: string,
        items: {
            value: string,
            title: string,
        }[]
    }[],
    activeFilters: string[],
    onClick: (val: string) => void,
}) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const handleOpen = () => setOpenDialog(true)
    const handleClose = () => setOpenDialog(false)

    return (
        <>
            <MobileOnly>
                <Button
                    variant="outlined"
                    onClick={handleOpen}
                    fullWidth
                    endIcon={
                        <FilterIcon />
                    }
                    sx={{
                        marginBottom: "32px",
                    }}
                >
                    Фильтр
                </Button>
                <Dialog
                    onClose={handleClose}
                    open={openDialog}
                >
                    <DialogContent>
                        <BoxFlexColumn
                            sx={{
                                gridGap: 20,
                            }}
                        >
                            {props.filterGroups.map((filterGroup, i) => (
                                <BoxFlexColumn
                                    key={i}
                                    sx={{
                                        alignItems: "center",
                                        gridGap: 16,
                                    }}
                                >
                                    <Typography
                                        variant="captionUppercase"
                                        color="text.tertiary"
                                    >
                                        {filterGroup.title}
                                    </Typography>

                                    <BoxFlexColumn
                                        sx={{
                                            gridGap: 12,
                                            width: "100%",
                                        }}
                                    >
                                        {filterGroup.items.map((item, k) => (
                                            <CChip
                                                key={k}
                                                label={item.title}
                                                variant="outlined"
                                                onClick={() => {
                                                    props.onClick(item.value)
                                                    handleClose()
                                                }}
                                                active={props.activeFilters.includes(item.value)}
                                            />
                                        ))}
                                    </BoxFlexColumn>
                                </BoxFlexColumn>
                            ))}
                        </BoxFlexColumn>
                    </DialogContent>
                </Dialog>
            </MobileOnly>

            <FilterContainer>
                {props.filterGroups.map((filterGroup, i) => (
                    <FilterItem
                        key={i}
                    >
                        <FilterTitle
                            variant="captionUppercase"
                            color="text.tertiary"
                        >
                            {filterGroup.title}
                        </FilterTitle>

                        <StackChip>
                            {filterGroup.items.map((item, k) => (
                                <CChip
                                    key={k}
                                    label={item.title}
                                    variant="outlined"
                                    onClick={() => props.onClick(item.value)}
                                    active={props.activeFilters.includes(item.value)}
                                />
                            ))}
                        </StackChip>
                    </FilterItem>
                ))}
            </FilterContainer>
        </>
    );
}

export default Filter;