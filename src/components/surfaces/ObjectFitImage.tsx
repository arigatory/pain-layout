import React from "react";

const ObjectFits = {
    cover: "cover",
    contain: "contain",
    fill: "fill",
    none: "none",
    "scale-down": "scale-down",
}

type ObjectFitsType = keyof typeof ObjectFits;

const ObjectFitImage = (props: {
    img: string,
    height?: string,
    width?: string,
    objectFit?: ObjectFitsType,
    alt?: string,
}) => (
    <img
        src={props.img}
        style={{
            objectFit: props.objectFit,
            width: props.width,
            height: props.height,
            maxHeight: "100%",
        }}
        alt={props.alt}
        loading="lazy"
    />
);

ObjectFitImage.defaultProps = {
    objectFit: "cover",
    width: "100%",
}

export default ObjectFitImage;