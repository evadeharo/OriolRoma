import Link from "./Link"

type NavigationTypes = {
  ctaLink: string
  ctaLabel: string
}

type Props = {
  navigation: Array<NavigationTypes>
  closeMenuCallback: () => void
}

const Menu: React.FC<Props> = ({
  navigation,
  closeMenuCallback,
}: Props): React.ReactElement => {
  return (
    <div className="bg-gray-300 fixed top-[8vh] left-0 w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col leading-3xl">
        {navigation.map((item, index) => {
          return (
            <button
              key={index}
              className="text-20"
              onClick={() => closeMenuCallback()}
            >
              <Link href={item.ctaLink}>{item.ctaLabel}</Link>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Menu
