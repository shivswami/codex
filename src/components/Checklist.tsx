import { useEffect, useState } from 'react'

interface ItemState {
  checked: boolean
  notes: string
}

interface ChecklistProps {
  title: string
  items: string[]
  storageKey: string
  onChange?: (state: Record<string, ItemState>) => void
}

const Checklist = ({ title, items, storageKey, onChange }: ChecklistProps) => {
  const [state, setState] = useState<Record<string, ItemState>>({})

  useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved) setState(JSON.parse(saved))
  }, [storageKey])

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state))
    onChange?.(state)
  }, [state, storageKey, onChange])

  const toggle = (item: string) => {
    setState((s) => ({
      ...s,
      [item]: { checked: !s[item]?.checked, notes: s[item]?.notes || '' },
    }))
  }

  const updateNotes = (item: string, notes: string) => {
    setState((s) => ({
      ...s,
      [item]: { checked: s[item]?.checked || false, notes },
    }))
  }

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm">
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex flex-col">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={state[item]?.checked || false}
                onChange={() => toggle(item)}
              />
              <span>{item}</span>
            </label>
            <textarea
              className="mt-1 p-1 border rounded text-sm"
              placeholder="notes"
              value={state[item]?.notes || ''}
              onChange={(e) => updateNotes(item, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Checklist
