import useBreakpoint from "./useBreakpoint"
import tailwindConfig from "../tailwind.config"

export default function useIsMobile(): boolean {
  const isMobile = useBreakpoint(
    `(max-width: ${tailwindConfig.theme.screens.sm})`
  )

  return isMobile
}
