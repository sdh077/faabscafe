import clsx from 'clsx'

export function H1({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h1 className={clsx(className, 'flex flex-wrap gap-4 text-xl text-neutral-600')}>
      {children}
    </h1>
  )
}

