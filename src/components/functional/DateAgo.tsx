import React, {useEffect, useState} from "react";
import moment from "moment/moment";

const DateAgo = (props: {
    ts: number,
}) => {
    const [dateAgo, setDateAgo] = useState<string>('');
    const momentObj = moment(props.ts);
    const fromNow = () => momentObj.fromNow();

    const tick = () => {
        setDateAgo(fromNow());
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 30000);
        return () => {
            clearInterval(timerID);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {fromNow() ?? dateAgo}
        </>
    );
};

export default DateAgo;