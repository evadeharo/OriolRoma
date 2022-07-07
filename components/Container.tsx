type Props = {
  paddingTopPage?: string
  id?: string
  children: React.ReactNode
  paddingHorizontal?: string
  paddingVertical?: string
  backgroundColor?: string
  className?: string
  childrenContainerClassName?: string
}

const Container: React.FC<Props> = ({
  id,
  children,
  paddingHorizontal,
  paddingVertical,
  backgroundColor,
  className = "",
  paddingTopPage = "",
  childrenContainerClassName = "",
}: Props): React.ReactElement => {
  return (
    <div
      id={id}
      className={` ${paddingTopPage} ${backgroundColor || "bg-transparent"
        } ${className}`}
    >
      <div
        className={`w-full h-full border-none
          ${paddingHorizontal || "px-4 md:px-6 lg:px-8"}
          ${paddingVertical || "py-12 md:py-12 xl:py-24"}
          ${childrenContainerClassName}`}
      >
        {children}
      </div>
    </div>
  )
}

export default Container
