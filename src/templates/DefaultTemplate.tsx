import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {styled} from "@mui/system";
import BoxFlexColumn from "../components/layout/BoxFlexColumn";

const Content = styled(BoxFlexColumn)(({theme}) => ({
    gridGap: 140,
    paddingBottom: 220,
    borderRadius: "0px 0px 50px 50px",
    backgroundColor: theme.palette.background.default,
    position: "relative",
    zIndex: 5,

    "@media (max-width: 899px)": {
        gridGap: 50,
        paddingBottom: 130,
    },
})) as typeof BoxFlexColumn;

const DefaultTemplate = (props: {
    children: React.ReactNode
}) => {
    return (
        <>
            <Header/>
            <Content>
                {props.children}
            </Content>
            <Footer/>
        </>
    );
};

export default DefaultTemplate;
