import type { FC, JSXElementConstructor, ReactElement } from "react"
import { useRef } from "react"
import { createPortal } from "react-dom"

type Props = {
  children: ReactElement<unknown, string | JSXElementConstructor<unknown>>
}

/**
 * Allows you to render JSX decoupled from the React component tree.
 * When rendered, this component will append its children at the end of the body.
 *
 * ```tsx
 * const [show, setShow] = useState(false)
 *
 * <button onClick={() => setShow(current => !current)} />
 * {show && (
 *   <Portal>
 *     <div className="fixed inset-0 bg-black/50" />
 *   </Portal>
 * )}
 * ```
 */
const Portal: FC<Props> = ({ children }) => {
  const body = useRef(
    typeof document !== "undefined" && document.querySelector("body")
  )

  if (!body.current) return null

  return createPortal(children, body.current)
}

export default Portal
