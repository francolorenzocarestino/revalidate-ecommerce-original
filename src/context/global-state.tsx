'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

export const AppContext = createContext({
  country: {
    value: 'ar',
    label: '🇦🇷 AR'
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCountry: (country: { value: string; label: string }) => {}
})

export const useAppContext = () => useContext(AppContext)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [country, setCountry] = useState({
    value: 'ar',
    label: '🇦🇷 AR'
  })

  return (
    <AppContext.Provider
      value={{
        country,
        setCountry
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
