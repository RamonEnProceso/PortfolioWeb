import PortfolioPage from './features/PortfolioPage'
import { LanProvider } from './features/shared/LanContext'

function App() {

  return (
    <>
      <LanProvider>
        <PortfolioPage/>
      </LanProvider>
    </>
  )
}

export default App
