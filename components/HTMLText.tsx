import { useEffect, useRef } from "react"
import snarkdown from "snarkdown"

type Props = {
  text: string
  className?: string
  fontSize?: string
}

const HTMLText: React.FC<Props> = ({
  text,
  className = "",
  fontSize = "",
}: Props): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const links = ref.current.querySelectorAll("a")

    if (!links) return

    links.forEach((link) => {
      link.setAttribute("target", "_blank")
      link.setAttribute("rel", "noopener noreferrer")
    })
  }, [text])

  return (
    <div className={`${fontSize} ${className} markdown`}>
      {text && typeof text === "string" && (
        <span
          ref={ref}
          dangerouslySetInnerHTML={{ __html: snarkdown(text) }}
        ></span>
      )}
    </div>
  )
}

export default HTMLText
