import React, {useEffect, useState} from "react";
import {Dialog, DialogContent, DialogTitle, IconButton, Link, Typography} from "@mui/material";
import theme from "../../theme";
import Xmark from "../icons/Xmark";
import BoxList from "../layout/BoxList";

const DoctorOpinionDialog = (props: {
    openExternal: boolean,
    handleChangeOpenExternal: (open: boolean) => void,
}) => {
    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        setOpen(props.openExternal)
    }, [props.openExternal])

    const handleClose = () => {
        setOpen(false);
        props.handleChangeOpenExternal(false);
    };
    return (
        <Dialog
            onClose={handleClose}
            open={open}
        >
            <DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 6,
                        top: 6,
                    }}
                >
                    <Xmark
                        color={theme.palette.text.tertiary}
                    />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Typography
                    variant="h4"
                >
                    Услуга «Мнение врача» включает:
                </Typography>

                <BoxList>
                    <li>
                        <Typography
                            variant="body2"
                        >
                            Доктор выслушает ваш полный рассказ о течении заболевания;
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant="body2"
                        >
                            Доктор может просмотреть данные исследований, включая КТ и МРТ;
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant="body2"
                        >
                            Доктор может дать клиенту своё видение проблемы, скорректировать план обследования и наблюдения, направить к другим специалистам
                        </Typography>
                    </li>
                </BoxList>

                <Typography
                    variant="subtitle2"
                >
                    Мы пока не можем:
                </Typography>

                <BoxList>
                    <li>
                        <Typography
                            variant="body2"
                        >
                            Поставить диагноз с выносом официального заключения
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant="body2"
                        >
                            Выписать электронный рецепт
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant="body2"
                        >
                            Предоставить справку для получения налогового вычета
                        </Typography>
                    </li>
                </BoxList>

                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    «Мнение врача» не является медицинской услугой <br/>
                    Нажимая на кнопку, даю согласие, что ознакомился
                    <Link
                        href="#"
                    >
                        с офертой
                    </Link>
                </Typography>
            </DialogContent>
        </Dialog>
    );
}

export default DoctorOpinionDialog;