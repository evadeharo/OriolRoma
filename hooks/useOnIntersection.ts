import { useState, useRef, useEffect, MutableRefObject } from "react"

/**
 * Crea un `IntersectionObserver` y trackea la visibilidad de la referencia proporcionada.
 * Si se le proporciona un callback, lo ejecutará en cada entry.
 * Devuelve un boolean con el valor de `isIntersecting` de la última entry.
 *
 * ```typescript
 * // Uso básico
 * const intersecting = useOnIntersection(element)
 *
 * // Con un callback
 * useOnIntersection(element, entry => console.log(entry))
 *
 * // Con opciones custom
 * useOnIntersection(element, entry => console.log(entry), { rootMargin: "25%" })
 * ```
 * @param reference una referencia de React
 * @param callback (optional) un callback a ejecutar en cada entry
 * @param intersectionObserverOptions (optional) un objeto con la configuración del intersectionObserver
 * @returns intersecting (boolean)
 */
export default function useOnIntersection(
  reference: MutableRefObject<HTMLElement>,
  callback?: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit,
  disconnect = false
): boolean {
  const [intersecting, setIntersecting] = useState(false)
  const observer = useRef<IntersectionObserver>(null)

  useEffect(() => {
    const el = reference.current
    if (el !== null && !disconnect) {
      observer.current = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
        if (typeof callback === "function") callback(entry)
      }, options)
      observer.current.observe(el)
    }
    return () => observer.current && observer.current.unobserve(el)
  }, [reference, callback, options, disconnect])

  return intersecting
}
