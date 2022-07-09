import NextLink from "next/link"

type Props = {
  children: React.ReactNode
  className?: string
  href: string
  openOnNewTab?: boolean
  download?: string
}

const Link: React.FC<Props> = ({
  children,
  className = "",
  href,
  openOnNewTab = false,
  download,
}: Props) => {
  if (!href) {
    return <>{children}</>
  }

  const downloadImage = () => {
    try {
      fetch(`${href}?download=true`)
        .then((response) => response.blob())
        .then((blob) => URL.createObjectURL(blob))
        .then((href) => {
          Object.assign(document.createElement("a"), {
            href,
            download,
          }).click()
        })
    } catch (error) {
      console.log("error", error)
    }
  }

  if (download) {
    return (
      <button onClick={downloadImage} className={className}>
        {children}
      </button>
    )
  }

  if (href.charAt(0) === "#")
    return (
      <a
        draggable={false}
        href={href}
        className={`focus:outline-none text-left w-auto ${className}`}
        onClick={(event) => {
          // prevents default scroll to id as animation is inconsistent between browsers
          event.preventDefault()
        }}
      >
        {children}
      </a>
    )

  if (href.charAt(0) === "/" && openOnNewTab)
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        download={download}
        rel="noopener noreferrer"
        draggable={false}
      >
        {children}
      </a>
    )

  if (href.charAt(0) === "#" || openOnNewTab)
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        draggable={false}
      >
        {children}
      </a>
    )

  return (
    <NextLink href={href}>
      <a className={className} draggable={false}>
        {children}
      </a>
    </NextLink>
  )
}

export default Link
