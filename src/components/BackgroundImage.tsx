import clsx from 'clsx'

export function BackgroundImage({
  className,
  position = 'left',
}: {
  className?: string
  position?: 'left' | 'right'
}) {
  return (
    <div
      className={clsx('absolute inset-0 overflow-hidden bg-rose-50', className)}
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
    </div>
  )
}
