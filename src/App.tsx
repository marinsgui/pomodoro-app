import { Brain, Coffee } from "lucide-react"
import { FocusDiv, LongBreakDiv, ShortBreakDiv } from "./styles/PomodoroPhases"

function App() {
  

  return (
    <>
      <div>
        <FocusDiv>
          <Brain /> Foco
        </FocusDiv>
        <ShortBreakDiv>
          <Coffee /> Pausa Curta
        </ShortBreakDiv>
        <LongBreakDiv>
          <Coffee /> Pausa Longa
        </LongBreakDiv>
      </div>
    </>
  )
}

export default App
