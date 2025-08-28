import { NavLink, Route, Routes } from 'react-router-dom'
import ExecutiveSummary from './routes/ExecutiveSummary'
import Vendors from './routes/Vendors'
import Implications from './routes/Implications'
import { usePresentationMode } from './contexts/PresentationModeContext'
import data from './data/quarter-2025-q2b.json'

const App = () => {
  const { enabled, toggle } = usePresentationMode()
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <header className="border-b p-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h1 className="text-xl font-semibold">
          Enterprise AI: What Changed This Quarter
        </h1>
        <div className="flex items-center gap-4">
          <span className="px-2 py-1 bg-gray-200 rounded" aria-label="quarter chip">{data.quarter}</span>
          <label className="flex items-center gap-1">
            <input type="checkbox" checked={enabled} onChange={toggle} aria-label="Presentation mode" />
            <span className="text-sm">Presentation Mode</span>
          </label>
        </div>
      </header>
      <nav className="bg-gray-50 border-b">
        <ul className="flex gap-4 p-2">
          <li><NavLink to="/" end className={({isActive})=>isActive? 'font-bold':'underline'}>Summary</NavLink></li>
          <li><NavLink to="/vendors" className={({isActive})=>isActive? 'font-bold':'underline'}>Vendors</NavLink></li>
          <li><NavLink to="/implications" className={({isActive})=>isActive? 'font-bold':'underline'}>Implications</NavLink></li>
        </ul>
      </nav>
      <main id="main" className="flex-1 py-6">
        <Routes>
          <Route path="/" element={<ExecutiveSummary />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/implications" element={<Implications />} />
        </Routes>
      </main>
      <footer className="text-center text-xs py-4 border-t">
        Demonstration content—public info; dates as at Aug 28, 2025
      </footer>
    </div>
  )
}

export default App
