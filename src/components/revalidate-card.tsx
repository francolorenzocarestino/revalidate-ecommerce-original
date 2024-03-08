'use client'

import { toast } from 'sonner'

import Image from 'next/image'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { useAppContext } from '@/context/global-state'

export function RevalidateCard({
  title,
  description,
  buttonLabel,
  tag,
  image
}: {
  title: string
  description: string
  buttonLabel: string
  tag: string
  image: string
}) {
  const { country } = useAppContext()

  const tagWithIso = `${tag}-${country?.value}`

  const handleClick = async () => {
    const date = new Date().toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    try {
      const endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/api/revalidate-ecommerce/?tag=${tagWithIso}`
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      if (data.revalidated) {
        toast('✅ Cache invalidado correctamente', {
          description: (
            <p>
              {`Cache de `}
              <span className="font-bold">{title.toUpperCase()}</span>
              {` invalidado a las ${date}`}
            </p>
          ),
          action: {
            label: 'Ok',
            onClick: () => console.log('Undo')
          }
        })
      } else {
        toast('❌ Error al invalidar cache', {
          description: (
            <p>
              {`Error al invalidar cache de `}
              <span className="font-bold">{title.toUpperCase()}</span>
              {` a las ${date}`}
            </p>
          ),
          action: {
            label: 'Ok',
            onClick: () => console.log('Undo')
          }
        })
      }
    } catch (error) {
      toast('❌ Error al invalidar cache', {
        description: (
          <p>
            {`Error al invalidar cache de `}
            <span className="font-bold">{title.toUpperCase()}</span>
            {` a las ${date}`}
          </p>
        ),
        action: {
          label: 'Ok',
          onClick: () => console.log('Undo')
        }
      })
    }
  }
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="h-4" />
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="h-4" />
      <CardContent>
        {!!image && (
          <div className="flex items-center">
            <Image
              alt="Revalidate Icon 1"
              className="w-full overflow-hidden rounded-md border border-slate-800"
              src={image}
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
        )}
        <div className="h-4" />
        <Button className="w-full" onClick={handleClick}>
          {buttonLabel}
        </Button>
      </CardContent>
    </Card>
  )
}
