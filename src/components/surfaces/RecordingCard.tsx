import React, {useState} from "react";
import {Box, Button, Dialog, DialogContent, IconButton, Typography} from "@mui/material";
import {styled} from "@mui/system";
import BoxFlex from "../layout/BoxFlex";
import BoxFlexColumn from "../layout/BoxFlexColumn";
import CAvatar from "../data-display/CAvatar";
import Phone from "../icons/Phone";
import Zoom from "../icons/Zoom";
import theme from "../../theme";
import SendBackward from "../icons/SendBackward";
import {priceFormatter} from "../../utils";

const Wrapper = styled(BoxFlexColumn)({
    borderRadius: 30,
    width: 860,
    overflow: "hidden",

    "@media (max-width: 899px)": {
        width: "auto",
    },
}) as typeof BoxFlexColumn

const Header = styled(BoxFlex)(({theme}) => ({
    backgroundColor: theme.palette.secondary.main,
    justifyContent: "space-between",
    padding: 28,

    "@media (max-width: 899px)": {
        padding: "20px 14px",
    },
})) as typeof BoxFlex

const Content = styled(BoxFlexColumn)(({theme}) => ({
    padding: "28px 28px 30px 28px",
    background: theme.palette.white.main,
    gridGap: 28,

    "@media (max-width: 899px)": {
        gridGap: 14,
        padding: "24px 16px 16px 16px",
        textAlign: "center",
    },
})) as typeof BoxFlexColumn

const MainInfoBlock = styled(BoxFlex)({
    gridGap: 24,
    alignItems: "center",

    "@media (max-width: 899px)": {
        flexDirection: "column",
    },
}) as typeof BoxFlex

const CommunicationBlock = styled(BoxFlex)(({theme}) => ({
    borderTop: `1px solid ${theme.palette.border.main}`,
    borderBottom: `1px solid ${theme.palette.border.main}`,

    "@media (max-width: 899px)": {
        flexDirection: "column",
    },
})) as typeof BoxFlex

const BottomNavigation = styled(BoxFlex)({
    alignItems: "center",
    justifyContent: "space-between",

    "@media (max-width: 899px)": {
        flexDirection: "column",
    },
}) as typeof BoxFlex

const PhoneNumberContainer = styled(Box)(({theme}) => ({
    padding: "20px 70px 20px 0",
    borderRight: `1px solid ${theme.palette.border.main}`,
    flexShrink: 0,

    "@media (max-width: 899px)": {
        borderRight: "none",
        borderBottom: `1px solid ${theme.palette.border.main}`,
        padding: "16px 0",
    },
})) as typeof Box

const ZoomBlockContainer = styled(BoxFlex)({
    width: "100%",
    paddingLeft: 20,
    alignItems: "center",
    justifyContent: "space-between",

    "& h6": {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: 300,
    },

    "@media (max-width: 899px)": {
        padding: "8px 0",

        "& h6" : {
            maxWidth: 186,
        }
    },
}) as typeof BoxFlex

const PriceTypography = styled(Typography)({
    "@media (max-width: 899px)": {
        width: "100%",
        paddingBottom: 14,
        borderBottom: `1px solid ${theme.palette.border.main}`,
    },
}) as typeof Typography

const ZoomBlock = (props: {
    link: string,
}) => (
    <ZoomBlockContainer>
        <a
            href={props.link}
        >
            <BoxFlex
                sx={{
                    gridGap: 16,
                }}
            >
                <Zoom
                    color={theme.palette.text.tertiary}
                />

                <Typography
                    variant="subtitle2"
                >
                    {props.link}
                </Typography>
            </BoxFlex>
        </a>

        <IconButton
            onClick={() => navigator.clipboard.writeText(props.link)}
        >
            <SendBackward
                color={theme.palette.primary.main}
            />
        </IconButton>
    </ZoomBlockContainer>
)

const RecordingCard = (props: {
    day: string,
    time: string,
    avatar: string,
    name: string,
    position: string,
    description: string,
    phoneNumber: string,
    link: string,
    price: number,
}) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const handleCancel = () => {
        setOpenDialog(true)
    }

    return (
        <>
            <Dialog
                onClose={() => setOpenDialog(false)}
                open={openDialog}
            >
                <DialogContent
                    sx={{
                        padding: "38px 47px",
                    }}
                >
                    <Typography
                        variant="h4"
                    >
                        Ваша запись отменена
                    </Typography>
                </DialogContent>
            </Dialog>
            <Wrapper>
                <Header>
                    <Typography
                        variant="subtitle1"
                    >
                        {props.day}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                    >
                        {props.time}
                    </Typography>
                </Header>
                <Content>
                    <MainInfoBlock>
                        <CAvatar
                            src={props.avatar}
                            size="lg"
                        />

                        <BoxFlexColumn
                            sx={{
                                gridGap: 16,
                            }}
                        >
                            <Typography
                                variant="h4"
                            >
                                {props.name}
                            </Typography>
                            <Typography
                                variant="captionUppercase"
                                color="text.tertiary"
                            >
                                {props.position}
                            </Typography>
                        </BoxFlexColumn>
                    </MainInfoBlock>

                    <Typography
                        variant="body2"
                    >
                        {props.description}
                    </Typography>
                    {(props.phoneNumber || props.link) &&
                        <CommunicationBlock>
                            {props.phoneNumber &&
                                <PhoneNumberContainer>
                                    <a
                                        href={`tel:${props.phoneNumber}`}
                                    >
                                        <BoxFlex
                                            sx={{
                                                gridGap: 16,
                                            }}
                                        >
                                            <Phone
                                                color={theme.palette.text.tertiary}
                                            />

                                            <Typography
                                                variant="subtitle2"
                                                color="text.primary"
                                            >
                                                {props.phoneNumber}
                                            </Typography>
                                        </BoxFlex>
                                    </a>
                                </PhoneNumberContainer>
                            }
                            {props.link &&
                                <ZoomBlock
                                    link={props.link}
                                />
                            }
                        </CommunicationBlock>
                    }
                    <BottomNavigation>
                        <PriceTypography
                            variant="subtitle1"
                        >
                            {priceFormatter(props.price)}/Ч
                        </PriceTypography>

                        <BoxFlex>
                            <Button
                                variant="text"
                                onClick={handleCancel}
                            >
                                <Typography
                                    variant="subtitle2"
                                    color="text.tertiary"
                                >
                                    Отменить
                                </Typography>
                            </Button>
                            <Button
                                variant="text"
                            >
                                <Typography
                                    variant="subtitle2"
                                    color="text.tertiary"
                                >
                                    Перенести
                                </Typography>
                            </Button>
                        </BoxFlex>
                    </BottomNavigation>
                </Content>
            </Wrapper>
        </>
    )
};

export default RecordingCard;