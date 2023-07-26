import { ComponentProps, ReactNode } from "react"
import { ButtonStyle } from "../styles/Buttons"

interface IButton extends ComponentProps<"button">  {
    children: ReactNode
}

export default function Button({ children }: IButton) {
    return (
        <ButtonStyle>
            {children}
        </ButtonStyle>
    )
}