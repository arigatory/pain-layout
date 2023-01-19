import React, {useEffect, useState} from "react";
import {Container, Divider, Grid, Link, Skeleton, Typography} from "@mui/material";
import CAccordion from "../surfaces/CAccordion";
import {isDev, sleep} from "../../utils";

const FAQBlock = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<{ title: string, text: string }[]>([])

    const fetchData = async () => {
        if (isDev) {
            await sleep(500)
            const response = require("../../mocks/faq__getData.json").data
            setData(response)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Container
            maxWidth="xl"
        >
            <Grid
                container
            >
                <Grid
                    item
                    xs={12}
                    md={4}
                >
                    <Typography
                        variant="h2"
                        mb="40px"
                    >
                        Часто <br/>задаваемые <br/>вопросы
                    </Typography>
                    <Typography
                        variant="subtitle1"
                    >
                        У вас остались вопросы?
                    </Typography>
                    <Link href="#">
                        <Typography
                            variant="subtitle1"
                            color="primary"
                        >
                            Напишите нам
                        </Typography>
                    </Link>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={8}
                >
                    {loading ? (
                        <>
                            <Skeleton
                                variant="rounded"
                                width="100%"
                            />
                            <br/>
                            <Divider />
                            <Skeleton
                                variant="rounded"
                                width="100%"
                            />
                            <br/>
                            <Divider />
                            <Skeleton
                                variant="rounded"
                                width="100%"
                            />
                            <br/>
                            <Divider />
                            <Skeleton
                                variant="rounded"
                                width="100%"
                            />
                        </>
                    ) : (
                        <CAccordion
                            items={data}
                        />
                    )}
                </Grid>
            </Grid>
        </Container>
    );
}

export default FAQBlock;