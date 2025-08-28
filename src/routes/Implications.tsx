import { useState } from 'react'
import data from '../data/quarter-2025-q2b.json'
import Checklist from '../components/Checklist'
import ExportButtons from '../components/ExportButtons'

interface ItemState {
  checked: boolean
  notes: string
}

const Implications = () => {
  const [all, setAll] = useState<Record<string, ItemState>>({})

  const update = (state: Record<string, ItemState>) => {
    setAll((a) => ({ ...a, ...state }))
  }

  return (
    <div className="px-4 space-y-6">
      <Checklist title="SDLC" items={data.implications.sdlc} storageKey="sdlc" onChange={update} />
      <Checklist title="Standards" items={data.implications.standards} storageKey="standards" onChange={update} />
      <Checklist title="Guardrails" items={data.implications.guardrails} storageKey="guardrails" onChange={update} />
      <Checklist title="Agentic UX" items={data.implications.ux} storageKey="ux" onChange={update} />
      <ExportButtons data={all} />
    </div>
  )
}

export default Implications
