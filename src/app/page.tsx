import type { Metadata } from 'next'

import { CountrySelector } from '@/components/country-selector'
import CarestinoLogo from '@/components/icons/logo'
import { RevalidateGrid } from '@/components/revalidate-grid'
import { AppProvider } from '@/context/global-state'

import layoutScreen from './layout-screen.png'
import countryScreen from './website-screen.png'

export const metadata: Metadata = {
  title: 'Revalidate Ecommerce | Carestino',
  description: 'Administra el cache del ecommerce de Carestino'
}

export default function Home() {
  return (
    <AppProvider>
      <main className="flex min-h-screen flex-col justify-between bg-slate-100 p-12">
        <div className="m-auto flex w-full max-w-2xl flex-col gap-4 md:items-center md:gap-8">
          <div className="mb-4 flex w-full flex-row items-start justify-between gap-2">
            <div className="w-24" />
            <CarestinoLogo className="h-9 min-w-0" />
            <CountrySelector />
          </div>

          <RevalidateGrid
            title="Revalidate Ecommerce"
            description="Invalida el cache de la aplicación para regenerar la información"
            infoCards={infoCards}
          />
          <RevalidateGrid
            title="Queries"
            description="Invalida el cache de las queries de la aplicación y regenera la información de los componentes afectados"
            infoCards={infoCardsQueries}
          />
        </div>
      </main>
    </AppProvider>
  )
}
const infoCards = [
  {
    title: '🌎 Pais',
    description:
      'Invalida el cache de todo el pais, regenerá la información de todo el ecommerce para el pais en cuestión. Agrupa todos los datos que este consumiendo el pais',
    image: countryScreen,
    tag: 'country',
    buttonLabel: 'Revalidate Country'
  },
  {
    title: '🖼️ Layout',
    description:
      'Invalida el cache de layout general del ecommerce (header, footer, sidebars, etc). Agrupa todos los datos que este consumiendo el layout',
    image: layoutScreen,
    tag: 'layout',
    buttonLabel: 'Revalidate Layout'
  }
]
const infoCardsQueries = [
  {
    title: '⚙️ Settings',
    description:
      'Si modificaste los settings de la aplicación, invalida el cache de los settings y regenera la información',
    image: '',
    tag: 'settings',
    buttonLabel: 'Revalidate Settings'
  },
  {
    title: '🌲 Categories',
    description:
      'Si modificaste las categorías de la aplicación, invalida el cache de las categorías y regenera la información',
    image: '',
    tag: 'categories',
    buttonLabel: 'Revalidate Categories'
  }
]
