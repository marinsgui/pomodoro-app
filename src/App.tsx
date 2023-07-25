import { Brain, Coffee } from "lucide-react"
import { FocusDiv, LongBreakDiv, ShortBreakDiv } from "./styles/PomodoroPhases"
import PomodoroTimer from "./components/PomodoroTimer"

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

        <PomodoroTimer defaultPomodoroTime={1500} />
      </div>
    </>
  )
}

export default App
