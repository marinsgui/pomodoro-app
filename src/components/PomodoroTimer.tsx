import { useState } from "react";
import useInterval from "../hooks/useInterval";
import secondsToTime from "../utils/SecondsToTime";

interface IPomodoroTimer {
    defaultPomodoroTime: number;
}

export default function PomodoroTimer({ defaultPomodoroTime }: IPomodoroTimer) {
    const [mainTime, setMainTime] = useState(defaultPomodoroTime)

    useInterval(() => {
        setMainTime(prevState => prevState - 1)
    }, 1000)

    return (
        <div>oi {secondsToTime(mainTime)}</div>
    )
}