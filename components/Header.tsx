import Link from "./Link"

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
  return (
    <div className="h-[8vh] bg-white w-full fixed top-0 flex items-center md:px-8 z-50 px-4">
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
    </div>
  )
}

export default Header
