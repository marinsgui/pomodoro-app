import { ReactNode } from "react"

export default function secondsToTime(seconds: number): ReactNode {
    const min = zeroLeft((seconds / 60) % 60)
    const sec = zeroLeft((seconds % 60) % 60)
    
    function zeroLeft(num: number) {
        return Math.floor(num).toString().padStart(2, '0')
    }

    return (
        <>
            {min}
            <br />
            {sec}
        </>
    )
}