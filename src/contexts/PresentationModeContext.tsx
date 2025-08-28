import { createContext, useContext, useState, type ReactNode } from 'react'

interface PresentationModeContextProps {
  enabled: boolean
  toggle: () => void
}

const PresentationModeContext = createContext<PresentationModeContextProps | undefined>(undefined)

export const PresentationModeProvider = ({ children }: { children: ReactNode }) => {
  const [enabled, setEnabled] = useState(false)
  const toggle = () => setEnabled((e) => !e)
  return (
    <PresentationModeContext.Provider value={{ enabled, toggle }}>
      {children}
    </PresentationModeContext.Provider>
  )
}

export const usePresentationMode = () => {
  const ctx = useContext(PresentationModeContext)
  if (!ctx) throw new Error('usePresentationMode must be used within provider')
  return ctx
}
