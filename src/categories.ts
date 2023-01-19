import theme from "./theme";

export const categories = {
    psychotherapy: "Психотерапия",
    meditation: "Медитация",
    yoga: "Йога",
    bos: "Биологически обратная связь",
    physical: "Физическая терапия",
    manual: "Мануальная терапия",
    acupuncture: "Акупунктура",
    invasive: "Инвазивные методы",
};

export const getTitleByCategory = (category: keyof typeof categories) => categories[category]

export const getLightColorByCategory = (category: keyof typeof categories) => theme.palette[category].light

export const getMainColorByCategory = (category: keyof typeof categories) => theme.palette[category].main
