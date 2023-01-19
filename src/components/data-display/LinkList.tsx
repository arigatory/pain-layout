import React from "react";
import {Link, Typography} from "@mui/material";
import {styled} from "@mui/system";
import BoxFlexColumn from "../layout/BoxFlexColumn";

const StyledLink = styled(Link)(({theme}) => ({
    color: theme.palette.text.primary,
    padding: "24px 0",
    borderBottom: `1px solid ${theme.palette.border.main}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "&:first-of-type": {
        borderTop: `1px solid ${theme.palette.border.main}`,
    }
})) as typeof Link;

const LinkList = (props: {
    title?: string,
    items: {
        title: string,
        url: string,
    }[],
    icon?: React.ReactElement,
}) => {
    return (
        <BoxFlexColumn>
            {props.title &&
                <Typography
                    variant="h3"
                    sx={{
                        mb: {
                            xs: "28px",
                            md: "40px",
                        },
                    }}
                >
                    {props.title}
                </Typography>
            }
            {Object.keys(props.items).map((val, i) => (
                <StyledLink
                    key={i}
                    href={props.items[i].url}
                >
                    <Typography
                        variant="body2"
                    >
                        {props.items[i].title}
                    </Typography>

                    {props.icon &&
                        <>
                            {props.icon}
                        </>
                    }
                </StyledLink>
            ))}
        </BoxFlexColumn>
    );
}

export default LinkList;