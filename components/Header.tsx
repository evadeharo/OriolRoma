import { useEffect, useState } from "react"
import Link from "./Link"
import Menu from "./Menu"
import Breadcrumbs from "nextjs-breadcrumbs"
import Appear from "./Appear"

type NavigationTypes = {
  ctaLink: string
  ctaLabel: string
}

type Props = {
  logo: string
  navigation: Array<NavigationTypes>
  ctaLinkHome: string
  pageName?: string
}

const Header = ({
  logo,
  navigation,
  ctaLinkHome,
  pageName,
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
    <div
      className={`h-max w-full fixed top-0 flex items-center justify-center md:px-8 z-50 px-4 
      ${pageName === "home"
          ? "bg-white md:bg-transparent border-b border-black md:border-none"
          : "border-b border-black bg-white"
        }`}
    >
      <div className="flex items-center justify-between w-full py-3.5 z-50">
        <div className="flex flex-col">
          {pageName !== "home" ? (
            <>
              <Link href={ctaLinkHome}>
                <span className="text-24 font-bold">{logo}</span>
              </Link>
              <Breadcrumbs
                rootLabel="Home"
                listClassName="flex gap-x-2 font-light"
                activeItemClassName="underlineAnimation"
                inactiveItemClassName="opacity-50"
              />
            </>
          ) : (
            <div className="md:hidden">
              <Link href="/about">
                <h1 className="font-medium uppercase text-30 text-left">
                  {logo}
                </h1>
              </Link>
            </div>
          )}
        </div>
        <div className="hidden md:flex justify-end items-center gap-x-6 w-1/2 h-[9vh]">
          {navigation.map((item, index) => {
            return (
              <div key={index} className="underlineHover">
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
            <div className="w-12 md:w-14 h-12 flex flex-col justify-center items-center">
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
          </button>
        </div>
      </div>

      <div className="z-0">
        {showMenuOverlay && (
          <div className="bg-gray-300 fixed z-0 top-0 left-0 w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col leading-3xl">
              {navigation.map((item, index) => {
                return (
                  <button
                    key={index}
                    className="text-20"
                    onClick={() => closeMenuCallback()}
                  >
                    <Appear>
                      <Link href={item.ctaLink}>{item.ctaLabel}</Link>
                    </Appear>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
