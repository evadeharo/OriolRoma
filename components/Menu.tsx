import Link from "./Link"

type NavigationTypes = {
  ctaLink: string
  ctaLabel: string
}

type Props = {
  navigation: Array<NavigationTypes>
}

const Menu: React.FC<Props> = ({
  navigation,
}: Props): React.ReactElement => {
  return (
    <div className="bg-black fixed inset-0 z-[90] w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col text-white">
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

export default Menu
