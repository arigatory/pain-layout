import React, {useState} from "react";
import {Accordion, AccordionDetails, accordionDetailsClasses, AccordionSummary, accordionSummaryClasses, Typography} from "@mui/material";
import {styled} from '@mui/system';
import Plus from "../icons/Plus";
import theme from "../../theme";
import Minus from "../icons/Minus";

const StyledAccordion = styled(Accordion)(({theme}) => ({
    boxShadow: "none",
    backgroundColor: "transparent",
    borderTop: `1px solid ${theme.palette.border.main}`,

    "&:last-of-type": {
        borderBottom: `1px solid ${theme.palette.border.main}`,
    },

    "&::before": {
        display: "none",
    },

    [`& .${accordionSummaryClasses.root}`]: {
        padding: 0,
    },
    [`&.${accordionSummaryClasses.expanded}`]: {
        margin: 0,
    },
    [`& .${accordionSummaryClasses.content}`]: {
        margin: "24px 0",
    },

    [`& .${accordionDetailsClasses.root}`]: {
        padding: "0 0 32px 0",
    }
}));

const CAccordion = (props: {
    items: {
        title: string,
        text: string,
    }[]
}) => {
    const [expanded, setExpanded] = useState<string | boolean>(false)

    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            {props.items.map((val, i) => {
                const panelKey = `panel${i}`;
                return (
                    <StyledAccordion
                        key={i}
                        expanded={expanded === panelKey}
                        onChange={handleChange(panelKey)}
                    >
                        <AccordionSummary
                            aria-controls={`${panelKey}-content`}
                            id={`${panelKey}-header`}
                            expandIcon={
                                expanded === panelKey ? <Minus color={theme.palette.text.primary}/> :
                                    <Plus color={theme.palette.text.primary}/>
                            }
                        >
                            <Typography
                                variant="subtitle1"
                            >
                                {props.items[i].title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                {props.items[i].text}
                            </Typography>
                        </AccordionDetails>
                    </StyledAccordion>
                )
            })}
        </>
    );
}

export default CAccordion;