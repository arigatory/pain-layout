import React from "react";
import CCard, {ICCardProps} from "./CCard";
import {makeStyles} from "@mui/styles";
import {Link} from "@mui/material";

const useStyles = makeStyles({
    articleItem: {
        width: 420,

        "@media (max-width: 899px)": {
            width: "100%",
        }
    },
});

const ArticleCard = (props: ICCardProps & {
    link: string,
}) => {
    const classes = useStyles();
    const { link, ...other } = props;
    return (
        <Link href={props.link}>
            <CCard
                {...other}
                className={classes.articleItem}
            />
        </Link>
    );
}

export default ArticleCard;