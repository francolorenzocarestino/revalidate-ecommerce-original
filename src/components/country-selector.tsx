'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useAppContext } from '@/context/global-state'

export function CountrySelector() {
  const { country, setCountry } = useAppContext()

  const handleValueChange = (value: string) => {
    const selectedOption = selectOptions.find(
      (option) => option.value === value
    )
    if (selectedOption) {
      setCountry(selectedOption)
    }
  }
  return (
    <Select onValueChange={(option) => handleValueChange(option)}>
      <SelectTrigger className="w-24 bg-white">
        <SelectValue placeholder={country.label}>{country.label}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {selectOptions.map((option, index) => (
          <SelectItem key={index} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

const selectOptions = [
  {
    value: 'ar',
    label: '🇦🇷 AR'
  },
  {
    value: 'cl',
    label: '🇨🇱 CL'
  },
  {
    value: 'co',
    label: '🇨🇴 CO'
  },
  {
    value: 'cr',
    label: '🇨🇷 CR'
  },
  {
    value: 'ec',
    label: '🇪🇨 EC'
  },
  {
    value: 'mx',
    label: '🇲🇽 MX'
  },
  {
    value: 'pa',
    label: '🇵🇦 PA'
  },
  {
    value: 'py',
    label: '🇵🇾 PY'
  },
  {
    value: 'pe',
    label: '🇵🇪 PE'
  },
  {
    value: 'uy',
    label: '🇺🇾 UY'
  }
]
