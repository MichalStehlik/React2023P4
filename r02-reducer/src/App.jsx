import {ThemedComponent} from "./components/ThemedComponent"
import {ThemedComponent2} from "./components/ThemedComponent2.jsx"
import {
  useAppContext, 
  SET_THEME, 
  SET_THEME1,
  THEME_DARK, 
  THEME_LIGHT
} from "./providers/ApplicationProvider"
import './App.css'

function App() {
  const [{theme}, dispatch] = useAppContext();
  return (
    <>
        <ThemedComponent />
        <ThemedComponent />
        <ThemedComponent2 />
        <ThemedComponent />
        <ThemedComponent2 />
        <ThemedComponent />
        <ThemedComponent2 />
        <div>
          <button onClick={e => {dispatch({type: SET_THEME, payload: THEME_LIGHT})}}>Light</button>
          <button onClick={e => {dispatch({type: SET_THEME, payload: THEME_DARK})}}>Dark</button>
        </div>
        <div>
          <button onClick={e => {dispatch({type: SET_THEME1, payload: THEME_LIGHT})}}>Light</button>
          <button onClick={e => {dispatch({type: SET_THEME1, payload: THEME_DARK})}}>Dark</button>
        </div>
    </>
  )
}

export default App
