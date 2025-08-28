import { useState } from 'react'
import Logo from './Logo'

interface SummaryItem {
  title: string
  bullets: string[]
  logos: string[]
}

interface Props {
  item: SummaryItem
}

const SummaryCard = ({ item }: Props) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6 flex flex-col gap-4" aria-live="polite">
      <div className="flex gap-2" aria-label="logos">
        {item.logos.map((l) => (
          <Logo key={l} name={l} />
        ))}
      </div>
      <h2 className="text-xl font-semibold">{item.title}</h2>
      <button
        className="text-accent underline text-sm self-start"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        Details
      </button>
      {open && (
        <ul className="list-disc pl-5 text-sm">
          {item.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SummaryCard
