import moment from "moment";
import "moment/locale/ru";

export const priceFormatter = (price: number) => price.toLocaleString() + "₽"

export const dateFormatter = (ts: number) => moment(ts).locale("ru").format("ll")

export const sleep = (ts = 5000) => {
    return new Promise((resolve) => setTimeout(resolve, ts));
}

export const isDev = process.env.REACT_APP_IS_DEV === "true";