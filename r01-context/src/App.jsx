import { useState, createContext } from 'react'
import { Container } from "./components/Container"
import { Panel } from "./components/Panel"
import { ThemedComponent } from "./components/ThemedComponent"
import { ThemedComponent2 } from "./components/ThemedComponent2"
import './App.css'

export const ThemeContext = createContext({theme: "light", setTheme: null});

function App() {
  const [themeValue, setThemeValue] = useState("light")
  
  return (
<div className="App">
    <ThemeContext.Provider value={{theme: themeValue, setTheme: setThemeValue}}> 
        <Container>
          <button onClick={e=>setThemeValue("light")}>Light</button>
          <button onClick={e=>setThemeValue("dark")}>Dark</button>
        </Container>
        <Container>
          <Panel />
          <Container>
            <Container>
              <Container>
                <ThemedComponent />
                <Panel />
              </Container>
            </Container>
            <Panel />
          </Container>
        </Container>
        <ThemedComponent />
        <ThemedComponent2 />
      </ThemeContext.Provider> 
    </div>
  )
}

export default App
