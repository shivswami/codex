import { useEffect, useRef, useState } from 'react'
import data from '../data/quarter-2025-q2b.json'
import SummaryCard from '../components/SummaryCard'
import { usePresentationMode } from '../contexts/PresentationModeContext'

const AUTO_MS = 15000

const ExecutiveSummary = () => {
  const { enabled } = usePresentationMode()
  const items = data.executiveSummary
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const timer = useRef<number | null>(null)

  const next = () => setIndex((i) => (i + 1) % items.length)
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)

  useEffect(() => {
    if (timer.current) {
      clearInterval(timer.current)
      timer.current = null
    }
    if (enabled || playing) {
      timer.current = window.setInterval(next, AUTO_MS)
    }
    return () => {
      if (timer.current) {
        clearInterval(timer.current)
        timer.current = null
      }
    }
  }, [enabled, playing])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  })

  const progress = ((index + 1) / items.length) * 100

  return (
    <div className="max-w-3xl mx-auto px-4" aria-label="Executive summary carousel">
      <SummaryCard item={items[index]} />
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2">
          <button onClick={prev} aria-label="Previous" className="px-3 py-1 border rounded">Prev</button>
          <button onClick={next} aria-label="Next" className="px-3 py-1 border rounded">Next</button>
          <button onClick={() => setPlaying((p) => !p)} aria-label="Play pause" className="px-3 py-1 border rounded">
            {playing ? 'Pause' : 'Play'}
          </button>
        </div>
        <div className="flex-1 h-2 bg-gray-200 ml-4 rounded" aria-label="progress bar">
          <div className="h-2 bg-accent rounded" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}

export default ExecutiveSummary
