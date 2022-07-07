import React, { useState, createContext } from "react"

export interface PageContextType {
  showOverlay: boolean
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>
}

export function usePageContext(): PageContextType {
  const [showOverlay, setShowOverlay] = useState<boolean>(false)

  return {
    showOverlay,
    setShowOverlay,
  }
}

export const PageContext = createContext<PageContextType>(undefined)
