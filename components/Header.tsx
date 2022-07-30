import { useEffect, useState } from "react"
import Link from "./Link"
import Menu from "./Menu"

type NavigationTypes = {
  ctaLink: string
  ctaLabel: string
}

type Props = {
  logo: string
  navigation: Array<NavigationTypes>
  ctaLinkHome: string
}

const Header = ({
  logo,
  navigation,
  ctaLinkHome,
}: Props): React.ReactElement => {
  const [showMenuOverlay, setShowMenuOverlay] = useState(false)
  const [blockedScroll, setBlockedScroll] = useState(false)

  const handleMenuOverlay = () => {
    if (!showMenuOverlay) {
      setShowMenuOverlay(true)
      setBlockedScroll(true)
    } else {
      setShowMenuOverlay(null)
      setBlockedScroll(false)
    }
  }

  function closeMenuCallback(): void {
    setShowMenuOverlay(null)
    setBlockedScroll(false)
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    document.querySelector("body").style.overflow = blockedScroll
      ? "hidden"
      : "visible"
  }, [blockedScroll])

  return (
    <div className="h-[8vh] bg-white w-full fixed top-0 flex items-center justify-between md:px-8 z-50 px-4">
      <Link className="w-1/2" href={ctaLinkHome}>
        <span className="text-24 font-bold">{logo}</span>
      </Link>
      <div className="hidden md:flex justify-end gap-x-6 w-1/2">
        {navigation.map((item, index) => {
          return (
            <div key={index}>
              <Link href={item.ctaLink}>{item.ctaLabel}</Link>
            </div>
          )
        })}
      </div>
      <div className="md:hidden w-12 h-12">
        <button
          className="z-[100] cursor-pointer"
          onClick={() => handleMenuOverlay()}
        >
          <div className="w-12 md:w-14 h-12 flex flex-col justify-center items-center bg-white">
            <div
              className={`bg-black h-[0.15rem] w-6 
              ${showMenuOverlay
                  ? "transform rotate-45 ease-in translate-y-0.5 duration-200"
                  : "mb-2 ease-out duration-300"
                }`}
            />
            <div
              className={`bg-black h-[0.15rem] w-6 
              ${showMenuOverlay
                  ? "transform -rotate-45 ease-in duration-200"
                  : "ease-out duration-300"
                }`}
            />
          </div>
          {showMenuOverlay && (
            <Menu
              navigation={navigation}
              closeMenuCallback={closeMenuCallback}
            />
          )}
        </button>
      </div>
    </div>
  )
}

export default Header
