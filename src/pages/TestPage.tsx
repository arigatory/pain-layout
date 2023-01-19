import React, {useState} from "react";
import {styled} from "@mui/system";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel, Grid,
    InputLabel,
    Link,
    MenuItem,
    SelectChangeEvent,
    TextField,
    Typography
} from "@mui/material";
import testStep1_1 from "../img/test-step-1.1.png";
import testStep1_2 from "../img/test-step-1.2.png";
import testStep1_3 from "../img/test-step-1.3.png";
import testStep2_1 from "../img/test-step-2.1.png";
import testStep2_2 from "../img/test-step-2.2.png";
import testStep2_3 from "../img/test-step-2.3.png";
import testStep3_1 from "../img/test-step-3.1.png";
import testStep3_2 from "../img/test-step-3.2.png";
import testStep3_3 from "../img/test-step-3.3.png";
import testStep4_1 from "../img/test-step-4.1.png";
import testStep4_2 from "../img/test-step-4.2.png";
import testStep4_3 from "../img/test-step-4.3.png";
import testStep5_1 from "../img/test-step-5.1.png";
import testStep5_2 from "../img/test-step-5.2.png";
import testStep5_3 from "../img/test-step-5.3.png";
import testStep6_1 from "../img/test-step-6.1.png";
import testStep6_2 from "../img/test-step-6.2.png";
import testStep6_3 from "../img/test-step-6.3.png";
import testStep7_1 from "../img/test-step-7.1.png";
import testStep7_2 from "../img/test-step-7.2.png";
import testStep7_3 from "../img/test-step-7.3.png";
import testStep8_1 from "../img/test-step-8.1.png";
import testStep8_2 from "../img/test-step-8.2.png";
import testStep9_1 from "../img/test-step-9.1.png";
import testStep9_2 from "../img/test-step-9.2.png";
import testStep9_3 from "../img/test-step-9.3.png";
import testStep10_1 from "../img/test-step-10.1.png";
import testStep10_2 from "../img/test-step-10.2.png";
import testStep10_3 from "../img/test-step-10.3.png";
import CIconButton from "../components/inputs/CIconButton";
import Xmark from "../components/icons/Xmark";
import routes from "../routes";
import BoxFlexColumn from "../components/layout/BoxFlexColumn";
import ArrowSmallRight from "../components/icons/ArrowSmallRight";
import {buildStyles, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import theme from "../theme";
import BoxFlex from "../components/layout/BoxFlex";
import CPaper from "../components/surfaces/CPaper";
import CSelect from "../components/inputs/CSelect";
import Emoji from "../components/functional/Emoji";
import ChipCheckbox from "../components/data-display/ChipCheckbox";
import StackChip from "../components/layout/StackChip";
import PainSlider from "../components/inputs/PainSlider";

const Background = styled(BoxFlex)(({theme}) => ({
    alignItems: "stretch",
    backgroundColor: theme.palette.surface.main,
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
})) as typeof BoxFlex;

const Content = styled(BoxFlexColumn)({
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 auto",
    width: 860,
    gridGap: 30,

    "@media (max-width: 899px)": {
        width: "100%",
    },
}) as typeof BoxFlexColumn;

const CloseButton = styled(CIconButton)({
    position: "absolute",
    top: 40,
    right: 40,

    "@media (max-width: 899px)": {
        top: 20,
        right: 20,
    },
}) as typeof Button;

const ProgressbarContainer = styled(Box)({
    width: 160,
    height: 160,
    marginBottom: 80,

    "@media (max-width: 899px)": {
        marginBottom: 40,
    },
}) as typeof Box;

const NextButton = styled(CIconButton)({
    width: "120px !important",
    height: "120px !important",
}) as typeof Button

const StyledCPaper = styled(CPaper)(({theme}) => ({
    width: 860,
    backgroundColor: theme.palette.background.default,

    "@media (max-width: 899px)": {
        width: "auto",
        backgroundColor: "transparent",
        padding: 20,
    },
})) as typeof CPaper;

const BoxFlexMedia = styled(BoxFlex)({
    "@media (max-width: 899px)": {
        flexDirection: "column",
    },
}) as typeof BoxFlex

const TestPage = () => {
    const progressInfo = {
        1: {
            percent: 10,
            backgroundImage: `url(${testStep1_1}), url(${testStep1_2}), url(${testStep1_3})`,
            backgroundPosition: "top left, right, 4% 86%",
        },
        2: {
            percent: 20,
            backgroundImage: `url(${testStep2_1}), url(${testStep2_2}), url(${testStep2_3})`,
            backgroundPosition: "76% 0,left, 95% 86%",
        },
        3: {
            percent: 30,
            backgroundImage: `url(${testStep3_1}), url(${testStep3_2}), url(${testStep3_3})`,
            backgroundPosition: "10.5% 0, right, left",
        },
        4: {
            percent: 40,
            backgroundImage: `url(${testStep4_1}), url(${testStep4_2}), url(${testStep4_3})`,
            backgroundPosition: "bottom left, right, left top",
        },
        5: {
            percent: 50,
            backgroundImage: `url(${testStep5_1}), url(${testStep5_2}), url(${testStep5_3})`,
            backgroundPosition: "100% 80%, 4% 86%, 34% 0%",
        },
        6: {
            percent: 60,
            backgroundImage: `url(${testStep6_1}), url(${testStep6_2}), url(${testStep6_3})`,
            backgroundPosition: "15% 0, right, 6% 90%",
        },
        7: {
            percent: 70,
            backgroundImage: `url(${testStep7_1}), url(${testStep7_2}), url(${testStep7_3})`,
            backgroundPosition: "92% 38%, 18% 7%, 5% 68%",
        },
        8: {
            percent: 80,
            backgroundImage: `url(${testStep8_1}), url(${testStep8_2})`,
            backgroundPosition: "top left, 93% 82%",
        },
        9: {
            percent: 90,
            backgroundImage: `url(${testStep9_1}), url(${testStep9_2}), url(${testStep9_3})`,
            backgroundPosition: "90% 0, bottom left, 92% 59%",
        },
        10: {
            percent: 100,
            backgroundImage: `url(${testStep10_1}), url(${testStep10_2}), url(${testStep10_3})`,
            backgroundPosition: "top center, 80% 15%, 20% 8%",
        },
    };
    const genderVariants: { [index: string]: string } = {
        man: "Мужчина",
        woman: "Женщина",
    };
    const painTypeVariants: { [index: string]: string } = {
        head: "Голове",
        back: "Спине",
        knee: "Колене",
        joints: "Суставах",
        ribCage: "Грудной клетке",
        womenPain: "Женские боли",
        musclePain: "Мышечные боли",
    };
    const painStartVariants: { [index: string]: string } = {
        lessThanThreeMonths: "до 3 мес",
        ThreeAndSixMonths: "3 - 6 мес",
        moreYear: "> 1 года",
    };
    const frequencyPainVariants: { [index: string]: string } = {
        everyDay: "каждый день",
        twoThreeAWeek: "2-3 раза в неделю",
        oneInAWeek: "1 раз в неделю",
        oneInAMonth: "1 раз в месяц",
        lessThanOnceAMonth: "реже раза в месяц",
        seasonal: "сезонно (осень/весна)",
    };
    const painNatureVariants: { [index: string]: Array<string | React.ReactElement> } = {
        shooting: ['простреливающая ', <Emoji symbol="⚡" label="High Voltage"/>],
        cutting: ['режущая ', <Emoji symbol="🔪" label="Kitchen Knife"/>],
        aching: ['ноющая ', <Emoji symbol="🌪" label="Tornado"/>],
        sharp: ['резкая ', <Emoji symbol="💥" label="Collision"/>],
        throbbing: ['пульсирующая ', <Emoji symbol="🎯" label="Bullseye"/>],
        pressing: ['давящая ', <Emoji symbol="🧱" label="Brick"/>],
        dull: ['тупая ', <Emoji symbol="🪵" label="Wood"/>],
        tingling: ['покалывание ', <Emoji symbol="✨" label="Sparkles"/>],
        burning: ['жгучая ', <Emoji symbol="🔥" label="Fire"/>],
    };
    const additionalSymptomVariants: { [index: string]: Array<string | React.ReactElement> } = {
        lethargy: ['вялость ', <Emoji symbol="😴" label="Sleeping Face"/>],
        depression: ['депрессия ', <Emoji symbol="😔" label="Pensive Face"/>],
        dizziness: ['головокружения ', <Emoji symbol="🤕" label="Face with Head-Bandage"/>],
        nausea: ['тошнота ', <Emoji symbol="🤢" label="Nauseated Face"/>],
        difficultyBreathing: ['затрудненное дыхание ', <Emoji symbol="😮‍💨" label="Face Exhaling"/>],
        anxiety: ['тревога ', <Emoji symbol="😨" label="Fearful Face"/>],
    };
    const painCausesAndEffectVariants: { [index: string]: string } = {
        insomnia: "бессонница",
        stress: "стресс",
        weather: "погода",
        standing: "стояние",
        sitting: "сидение",
        walking: "гуляние",
        training: "тренировка",
        food: "еда",
        toilet: "поход в туалет",
    };
    const helperVariants: { [index: string]: Array<string | React.ReactElement> } = {
        conversationWithLovedOnes: ['поговорить с близким ', <Emoji symbol="🗣" label="Speaking Head"/>],
        exerciseStress: ['физическая активность ', <Emoji symbol="🏊‍♀️" label="Woman Swimming"/>],
        coldWarm: ['холод ', <Emoji symbol="❄" label="Snowflake"/>, "\n\r️/ тепло ", <Emoji symbol="🔥" label="Fire"/>],
        rest: ['отдых ', <Emoji symbol="🏖" label="Beach with Umbrella"/>],
        meditationYoga: ['медитация, йога ', <Emoji symbol="🧘🏻‍♀️" label="Woman in Lotus Position"/>],
        massage: ['массаж ', <Emoji symbol="💆🏻‍♀️" label="Woman Getting Massage"/>],
        acupuncture: ['иглоукалывание ', <Emoji symbol="📍" label="Round Pushpin"/>],
        music: ['музыка ', <Emoji symbol="🎵" label="Musical Note"/>],
    };
    const [step, setStep] = useState<keyof typeof progressInfo>(1)
    const [yearOfBirth, setYearOfBirth] = useState<string>('')
    const [gender, setGender] = useState<keyof typeof genderVariants>('')
    const [painTypes, setPainTypes] = useState<Array<keyof typeof painTypeVariants>>([])
    const [painScore, setPainScore] = useState<number>(4)
    const [painStart, setPainStart] = useState<keyof typeof painStartVariants>('')
    const [frequencyPain, setFrequencyPain] = useState<keyof typeof frequencyPainVariants>('')
    const [painNatures, setPainNatures] = useState<Array<keyof typeof painNatureVariants>>([])
    const [additionalSymptoms, setAdditionalSymptoms] = useState<Array<keyof typeof additionalSymptomVariants>>([])
    const [isNoAdditionalSymptom, setIsNoAdditionalSymptom] = useState<boolean>(false)
    const [painCausesAndEffects, setPainCausesAndEffects] = useState<Array<keyof typeof painCausesAndEffectVariants>>([])
    const [isTakingMedications, setIsTakingMedications] = useState<null | boolean>(null)
    const [helpers, setHelpers] = useState<Array<keyof typeof helperVariants>>([])
    const [firstName, setFirstName] = useState<string>('')
    const [secondName, setSecondName] = useState<string>('')
    const [patronymic, setPatronymic] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [isAgree, setIsAgree] = useState<boolean>(true)

    const handleNextStep = () => {
        if (step === 10) {
            const res = {
                yearOfBirth: yearOfBirth,
                gender: gender,
                painTypes: painTypes,
                painScore: painScore,
                painStart: painStart,
                frequencyPain: frequencyPain,
                painNatures: painNatures,
                additionalSymptoms: additionalSymptoms,
                isNoAdditionalSymptom: isNoAdditionalSymptom,
                painCausesAndEffects: painCausesAndEffects,
                isTakingMedications: isTakingMedications,
                helpers: helpers,
                firstName: firstName,
                secondName: secondName,
                patronymic: patronymic,
                phoneNumber: phoneNumber,
                email: email,
                isAgree: isAgree,
            };
            // TODO add request
            alert(JSON.stringify(res))
        }
        setStep(prevState => {
            if (prevState < 10) {
                prevState++;
            }
            return prevState;
        })
    }

    const handleChangeGender = (event: SelectChangeEvent<HTMLInputElement | unknown>): void => {
        setGender(event.target.value as string);
    }

    const handleChangePainScore = (event: Event, newValue: number | number[]): void => {
        setPainScore(newValue as number)
    }

    const handleChangePainTypes = (newPainType: keyof typeof painTypeVariants): void => {
        setPainTypes(prevState => {
            return prevState.includes(newPainType)
                ? prevState.filter(i => i !== newPainType)
                : [...prevState, newPainType]
        })
    }

    const handleChangePainNatures = (newPainNature: keyof typeof painNatureVariants): void => {
        setPainNatures(prevState => {
            return prevState.includes(newPainNature)
                ? prevState.filter(i => i !== newPainNature)
                : [...prevState, newPainNature]
        })
    }

    const handleChangeAdditionalSymptoms = (newAdditionalSymptom: keyof typeof additionalSymptomVariants): void => {
        setAdditionalSymptoms(prevState => {
            return prevState.includes(newAdditionalSymptom)
                ? prevState.filter(i => i !== newAdditionalSymptom)
                : [...prevState, newAdditionalSymptom]
        })
    }

    const handleChangePainCausesAndEffects = (newPainCauseOrEffect: keyof typeof painCausesAndEffectVariants): void => {
        setPainCausesAndEffects(prevState => {
            return prevState.includes(newPainCauseOrEffect)
                ? prevState.filter(i => i !== newPainCauseOrEffect)
                : [...prevState, newPainCauseOrEffect]
        })
    }

    const handleChangeHelpers = (newHelper: keyof typeof helperVariants): void => {
        setHelpers(prevState => {
            return prevState.includes(newHelper)
                ? prevState.filter(i => i !== newHelper)
                : [...prevState, newHelper]
        })
    }

    const handleChangeIsNoAdditionalSymptom = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setIsNoAdditionalSymptom(event.target.checked)
    }

    const handleChangeIsAgree = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setIsAgree(event.target.checked)
    }

    const handleChangeIsTakingMedications = (newValue: boolean): void => {
        setIsTakingMedications(newValue)
    }

    const handleChangeFrequencyPain = (newValue: keyof typeof frequencyPainVariants): void => {
        setFrequencyPain(newValue)
    }

    const handleChangePainStart = (newValue: keyof typeof painStartVariants): void => {
        setPainStart(newValue)
    }

    return (
        <Background
            sx={{
                backgroundImage: progressInfo[step].backgroundImage,
                backgroundPosition: progressInfo[step].backgroundPosition,
            }}
        >
            <CloseButton
                variant="outlined"
                component={Link}
                href={routes.home}
            >
                <Xmark/>
            </CloseButton>
            <Content>
                <BoxFlex
                    alignItems="center"
                    height="100%"
                >
                    {step === 1 &&
                        <StyledCPaper>
                            <BoxFlexColumn
                                sx={{
                                    gridGap: 40,
                                }}
                            >
                                <Typography
                                    variant="h2"
                                >
                                    Расскажите о себе, нам важна история вашей боли, чтобы лучше понимать, как вам
                                    помочь
                                </Typography>

                                <BoxFlexMedia
                                    sx={{
                                        gridGap: 20,
                                    }}
                                >
                                    <TextField
                                        label="Год рождения"
                                        variant="standard"
                                        onChange={(e) => setYearOfBirth(e.target.value)}
                                        value={yearOfBirth}
                                    />

                                    <FormControl
                                        variant="standard"
                                        sx={{
                                            minWidth: 310,
                                        }}
                                    >
                                        <InputLabel>
                                            Пол
                                        </InputLabel>
                                        <CSelect
                                            value={gender}
                                            onChange={handleChangeGender}
                                            label="Пол"
                                        >
                                            <MenuItem value="">
                                                Не выбрано
                                            </MenuItem>
                                            {Object.keys(genderVariants).map((val: string, i) => (
                                                <MenuItem
                                                    key={i}
                                                    value={val}
                                                >
                                                    {genderVariants[val]}
                                                </MenuItem>
                                            ))}
                                        </CSelect>
                                    </FormControl>
                                </BoxFlexMedia>
                            </BoxFlexColumn>
                        </StyledCPaper>
                    }

                    {step === 2 &&
                        <StyledCPaper>
                            <BoxFlexColumn
                                sx={{
                                    gridGap: 40,
                                }}
                            >
                                <Typography
                                    variant="h3"
                                >
                                    Моя хроническая боль сильно выматывает, дольше всего я терплю и меня беспокоит боль
                                    в:
                                </Typography>

                                <StackChip>
                                    {Object.keys(painTypeVariants).map((val: string, i: number) => (
                                        <ChipCheckbox
                                            key={i}
                                            label={painTypeVariants[val]}
                                            checked={painTypes.includes(val)}
                                            onClick={() => handleChangePainTypes(val)}
                                        />
                                    ))}
                                </StackChip>
                            </BoxFlexColumn>
                        </StyledCPaper>
                    }

                    {step === 3 &&
                        <BoxFlexColumn
                            sx={{
                                gridGap: 17,
                            }}
                        >
                            <StyledCPaper>
                                <BoxFlexColumn
                                    sx={{
                                        gridGap: 56,
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                    >
                                        Если боль можно оценить баллами, то отмечу её в:
                                    </Typography>

                                    <PainSlider
                                        aria-label="Боль в баллах"
                                        value={painScore}
                                        onChange={handleChangePainScore}
                                        step={1}
                                        min={1}
                                        max={10}
                                    />
                                </BoxFlexColumn>


                            </StyledCPaper>
                            <StyledCPaper>
                                <BoxFlexColumn
                                    sx={{
                                        gridGap: 35,
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                    >
                                        Моя боль, началась примерно:
                                    </Typography>

                                    <BoxFlex
                                        sx={{
                                            justifyContent: "space-around",
                                        }}
                                    >
                                        {Object.keys(painStartVariants).map((val: string, i: number) => (
                                            <Button
                                                key={i}
                                                variant={painStart === val ? "contained" : "outlined"}
                                                size="large"
                                                onClick={() => handleChangePainStart(val)}
                                            >
                                                {painStartVariants[val]}
                                            </Button>
                                        ))}
                                    </BoxFlex>
                                </BoxFlexColumn>
                            </StyledCPaper>
                        </BoxFlexColumn>
                    }

                    {step === 4 &&
                        <StyledCPaper>
                            <BoxFlexColumn
                                sx={{
                                    gridGap: 53,
                                }}
                            >
                                <Typography
                                    variant="h3"
                                >
                                    Боль я испытываю:
                                </Typography>

                                <BoxFlex
                                    sx={{
                                        flexWrap: "wrap",
                                        justifyContent: "space-between",
                                        columnGap: "20px",
                                        rowGap: "53px",

                                        "@media (max-width: 899px)": {
                                            rowGap: "20px",
                                        },
                                    }}
                                >
                                    {Object.keys(frequencyPainVariants).map((val: string, i: number) => (
                                        <Button
                                            key={i}
                                            variant={frequencyPain === val ? "contained" : "outlined"}
                                            size="large"
                                            onClick={() => handleChangeFrequencyPain(val)}
                                        >
                                            {frequencyPainVariants[val]}
                                        </Button>
                                    ))}
                                </BoxFlex>
                            </BoxFlexColumn>
                        </StyledCPaper>
                    }

                    {step === 5 &&
                        <StyledCPaper>
                            <BoxFlexColumn
                                sx={{
                                    gridGap: 21,
                                }}
                            >
                                <div>
                                    <Typography
                                        variant="h3"
                                        mb="10px"
                                    >
                                        «Характер» своей боли я описываю словами:
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.disabled"
                                    >
                                        *выберите 2-3 слова
                                    </Typography>
                                </div>

                                <StackChip>
                                    {Object.keys(painNatureVariants).map((val: string, i: number) => (
                                        <ChipCheckbox
                                            key={i}
                                            label={painNatureVariants[val]}
                                            checked={painNatures.includes(val)}
                                            onClick={() => handleChangePainNatures(val)}
                                        />
                                    ))}
                                </StackChip>
                            </BoxFlexColumn>
                        </StyledCPaper>
                    }

                    {step === 6 &&
                        <StyledCPaper>
                            <BoxFlexColumn
                                sx={{
                                    gridGap: 46,
                                }}
                            >
                                <Typography
                                    variant="h3"
                                >
                                    Помимо боли, во время «приступа» и до/после я порой ощущаю:
                                </Typography>

                                <StackChip>
                                    {Object.keys(additionalSymptomVariants).map((val: string, i: number) => (
                                        <ChipCheckbox
                                            key={i}
                                            label={additionalSymptomVariants[val]}
                                            checked={additionalSymptoms.includes(val)}
                                            onClick={() => handleChangeAdditionalSymptoms(val)}
                                        />
                                    ))}
                                </StackChip>

                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={isNoAdditionalSymptom}
                                            onChange={handleChangeIsNoAdditionalSymptom}
                                        />
                                    }
                                    label="Ничего"
                                />
                            </BoxFlexColumn>
                        </StyledCPaper>
                    }

                    {step === 7 &&
                        <StyledCPaper>
                            <BoxFlexColumn
                                sx={{
                                    gridGap: 47,
                                }}
                            >
                                <Typography
                                    variant="h3"
                                >
                                    По моему мнению, мою боль вызывает или усиливает:
                                </Typography>

                                <StackChip>
                                    {Object.keys(painCausesAndEffectVariants).map((val: string, i: number) => (
                                        <ChipCheckbox
                                            key={i}
                                            label={painCausesAndEffectVariants[val]}
                                            checked={painCausesAndEffects.includes(val)}
                                            onClick={() => handleChangePainCausesAndEffects(val)}
                                        />
                                    ))}
                                </StackChip>
                            </BoxFlexColumn>
                        </StyledCPaper>
                    }

                    {step === 8 &&
                        <StyledCPaper>
                            <BoxFlexColumn
                                sx={{
                                    gridGap: 42,
                                }}
                            >
                                <Typography
                                    variant="h3"
                                >
                                    Принимаете обезболевающие препараты?
                                </Typography>

                                <BoxFlex
                                    sx={{
                                        gridGap: 43,
                                    }}
                                >
                                    <Button
                                        variant={isTakingMedications === true ? "contained" : "outlined"}
                                        size="large"
                                        onClick={() => handleChangeIsTakingMedications(true)}
                                    >
                                        да
                                    </Button>
                                    <Button
                                        variant={isTakingMedications === false ? "contained" : "outlined"}
                                        size="large"
                                        onClick={() => handleChangeIsTakingMedications(false)}
                                    >
                                        нет
                                    </Button>
                                </BoxFlex>
                            </BoxFlexColumn>
                        </StyledCPaper>
                    }

                    {step === 9 &&
                        <StyledCPaper>
                            <BoxFlexColumn
                                sx={{
                                    gridGap: 35,
                                }}
                            >
                                <Typography
                                    variant="h3"
                                >
                                    Помимо обычных лекарств из аптеки мне помогает:
                                </Typography>

                                <StackChip>
                                    {Object.keys(helperVariants).map((val: string, i: number) => (
                                        <ChipCheckbox
                                            key={i}
                                            label={helperVariants[val]}
                                            checked={helpers.includes(val)}
                                            onClick={() => handleChangeHelpers(val)}
                                        />
                                    ))}
                                </StackChip>
                            </BoxFlexColumn>
                        </StyledCPaper>
                    }

                    {step === 10 &&
                        <StyledCPaper>
                            <BoxFlexColumn
                                sx={{
                                    gridGap: 32,
                                }}
                            >
                                <Typography
                                    variant="h3"
                                >
                                    Для завершения регистрации укажите:
                                </Typography>

                                <BoxFlexColumn
                                    sx={{
                                        gridGap: 20,
                                    }}
                                >
                                    <TextField
                                        label="Имя"
                                        variant="standard"
                                        onChange={(e) => setFirstName(e.target.value)}
                                        value={firstName}
                                        required
                                    />

                                    <TextField
                                        label="Фамилия"
                                        variant="standard"
                                        onChange={(e) => setSecondName(e.target.value)}
                                        value={secondName}
                                    />

                                    <TextField
                                        label="Отчество"
                                        variant="standard"
                                        onChange={(e) => setPatronymic(e.target.value)}
                                        value={patronymic}
                                    />

                                    <Grid
                                        container
                                        spacing={"20px"}
                                    >
                                        <Grid
                                            item
                                            xs={12}
                                            md={6}
                                        >
                                            <TextField
                                                label="Телефон"
                                                variant="standard"
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                value={phoneNumber}
                                                fullWidth
                                                required
                                            />
                                        </Grid>

                                        <Grid
                                            item
                                            xs={12}
                                            md={6}
                                        >
                                            <TextField
                                                label="Email"
                                                variant="standard"
                                                onChange={(e) => setEmail(e.target.value)}
                                                type="email"
                                                value={email}
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                </BoxFlexColumn>

                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={isAgree}
                                            onChange={handleChangeIsAgree}
                                        />
                                    }
                                    label={
                                        <Typography
                                            variant="body3"
                                        >
                                            Даю согласие на <Link href={routes.policyPrivacy}>обработку персональных
                                            данных</Link>
                                        </Typography>
                                    }
                                />
                            </BoxFlexColumn>
                        </StyledCPaper>
                    }
                </BoxFlex>

                <ProgressbarContainer>
                    <CircularProgressbarWithChildren
                        value={progressInfo[step].percent}
                        strokeWidth={1}
                        styles={buildStyles({
                            pathColor: theme.palette.primary.main,
                            trailColor: theme.palette.border.main,
                        })}
                    >
                        <NextButton
                            variant="contained"
                            onClick={handleNextStep}
                        >
                            <ArrowSmallRight
                                width={40}
                                height={40}
                            />
                        </NextButton>
                    </CircularProgressbarWithChildren>
                </ProgressbarContainer>
            </Content>
        </Background>
    );
};

export default TestPage;
