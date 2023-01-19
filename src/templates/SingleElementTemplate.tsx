import React from "react";
import {styled} from "@mui/system";
import DefaultTemplate from "./DefaultTemplate";
import BoxFlexColumn from "../components/layout/BoxFlexColumn";
import {Container} from "@mui/material";

const ContentContainer = styled(BoxFlexColumn)({
    alignItems: "center",
    marginTop: 232,

    "@media (max-width: 899px)": {
        marginTop: 78,
    },
}) as typeof BoxFlexColumn

const SingleElementTemplate = (props: {
    children: React.ReactNode
}) => {
    return (
        <DefaultTemplate>
            <Container
                maxWidth="xl"
            >
                <ContentContainer>
                    {props.children}
                </ContentContainer>
            </Container>
        </DefaultTemplate>
    );
};

export default SingleElementTemplate;
