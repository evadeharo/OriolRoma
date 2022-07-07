type Props = {
  children: React.ReactNode
  className?: string
  id?: string
}

const Grid: React.FC<Props> = ({
  children,
  className = "",
  id = "",
}: Props): React.ReactElement => {
  return (
    <div
      id={id}
      className={`w-full grid grid-cols-4 md:grid-cols-12 gap-x-4 ${className}`}
    >
      {children}
    </div>
  )
}

export default Grid
