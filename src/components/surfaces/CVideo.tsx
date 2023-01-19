import React, {useState} from "react";
import {CardMedia} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Play from "../icons/Play";
import BoxFlex from "../layout/BoxFlex";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
    overlay: {
        position:"absolute",
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.overlay.main,
        pointerEvents: "none",
    },
    videoWrapper: {
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        borderRadius: 30,
        overflow: "hidden",
    },
    play: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: "50%",
        backgroundColor: theme.palette.primary.main,
        pointerEvents: "none",
        cursor: "pointer",

        "@media (max-width: 899px)": {
            width: 60,
            height: 60,
        }
    },
}));

const CVideo = (props: {
    link: string,
}) => {
    const classes = useStyles();
    const [isPlayed, setIsPlayed] = useState<boolean>(false)

    return (
        <BoxFlex
            className={classes.videoWrapper}
        >
            {!isPlayed &&
                <>
                    <div className={classes.overlay}></div>
                    <BoxFlex
                        className={classes.play}
                    >
                        <Play
                            color={theme.palette.white.main}
                        />
                    </BoxFlex>
                </>
            }
            <CardMedia
                component="video"
                image={props.link}
                onPlay={() => setIsPlayed(true)}
                onPause={() => setIsPlayed(false)}
                controls
            />
        </BoxFlex>
    );
}

export default CVideo;