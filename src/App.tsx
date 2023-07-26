import { Brain } from "lucide-react"
import { PomodoroPhaseStyles } from "./styles/PomodoroPhases"
import PomodoroTimer from "./components/PomodoroTimer"
import Button from "./components/Button"

import { Play, Pause } from "lucide-react"
import { MainPageContainerStyles, MainPageStyles } from "./styles/MainPageStyles"

function App() {

  console.log(typeof <Play />)

  return (
    <MainPageStyles>
      <MainPageContainerStyles>
        <PomodoroPhaseStyles>
          <Brain /> Foco
        </PomodoroPhaseStyles>

        <PomodoroTimer defaultPomodoroTime={1500} />
        <Button>
          <Pause fill="#471515" size={30} />
        </Button>
      </MainPageContainerStyles>
    </MainPageStyles>
  )
}

export default App
