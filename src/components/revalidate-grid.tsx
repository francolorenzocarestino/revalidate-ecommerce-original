import { RevalidateCard } from '@/components/revalidate-card'

export function RevalidateGrid({
  title,
  description,
  infoCards
}: {
  title: string
  description: string
  infoCards: Array<any>
}) {
  return (
    <>
      {(title || description) && (
        <div className="flex w-full flex-col gap-1.5">
          {title && (
            <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
          )}
          {description && (
            <p className="text-sm leading-none text-gray-500 dark:text-gray-400 md:text-base">
              {description}
            </p>
          )}
        </div>
      )}
      <div className="grid w-full gap-4 md:grid-cols-2">
        {infoCards.map((card, index) => (
          <RevalidateCard key={index} {...card} />
        ))}
      </div>
    </>
  )
}
