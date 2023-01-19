import React from "react";
import image404 from "../img/404.png";
import SingleElementTemplate from "../templates/SingleElementTemplate";
import BoxFlexColumn from "../components/layout/BoxFlexColumn";
import {Button, Link, Typography} from "@mui/material";
import routes from "../routes";
import {styled} from "@mui/system";

const Title = styled(Typography)({
    margin: "80px 0 30px",

    "@media (max-width: 899px)": {
        margin: "50px 0 32px",
    },
}) as typeof Typography

const Image = styled("img")({
    "@media (max-width: 899px)": {
        marginTop: 32,
    },
})

const NotFoundPage = () => {
    return (
        <SingleElementTemplate>
            <BoxFlexColumn
                alignItems="center"
            >
                <Image
                    src={image404}
                    alt="404"
                />

                <Title
                    variant="h4"
                >
                    Упс, данная страница не найдена =(
                </Title>

                <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    href={routes.home}
                >
                    На главную
                </Button>
            </BoxFlexColumn>
        </SingleElementTemplate>
    );
};

export default NotFoundPage;
