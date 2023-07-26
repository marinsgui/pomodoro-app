import { useState } from "react";
import useInterval from "../hooks/useInterval";
import secondsToTime from "../utils/secondsToTime";
import { PomodoroContainer } from "../styles/PomodoroTimerStyles";

interface IPomodoroTimer {
    defaultPomodoroTime: number;
}

export default function PomodoroTimer({ defaultPomodoroTime }: IPomodoroTimer) {
    const [mainTime, setMainTime] = useState(defaultPomodoroTime)

    useInterval(() => {
        setMainTime(prevState => prevState - 1)
    }, 1000)

    return (
        <PomodoroContainer>
            {secondsToTime(mainTime)}
        </PomodoroContainer>
    )
}