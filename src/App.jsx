import { useState } from 'react'
import Navbar from './components/Navbar'
import Facts from './components/Facts'

function App() {

  const [ darkMode, setDarkMode ] = useState( false )

  function toggleDarkMode() {
    setDarkMode( prevMode => !prevMode )
  }

  return (
    <>
      <Navbar
        isDarkMode = { darkMode }
        toggleMode = { toggleDarkMode }
      />
      <Facts 
        isDarkMode = { darkMode }
      />
    </>
  )
}

export default App
