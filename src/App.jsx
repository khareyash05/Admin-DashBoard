import './App.css'
import { ColorModeContext , useMode } from './theme'
import { CssBaseline , ThemeProvider } from '@mui/material'
import TopBar from './scenes/globals/TopBar'

function App() {
  const [theme,ColorMode] = useMode()
  return (
    <ColorModeContext.Provider value={ColorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <main className='content'>
            <TopBar/>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
