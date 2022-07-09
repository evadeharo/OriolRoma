import { ImageType, ModuleType } from "types"
import MockImage from "./MockImage"
import Link from "./Link"

type Props = {
  title: string
  assistant: string
  photographer: string
  image: ModuleType<ImageType>
  ctaLinkAssistant: string
  ctaLinkPhotographer: string
}

const Home = ({
  title,
  assistant,
  photographer,
  image,
  ctaLinkAssistant,
  ctaLinkPhotographer,
}: Props): React.ReactElement => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 text-white z-50 uppercase text-40 font-medium pl-6 pt-3">
        <h1>{title}</h1>
      </div>

      <div className="flex absolute top-0 left-0 text-white w-full h-full">
        <Link
          className="w-1/2 flex justify-center items-center relative"
          href={ctaLinkAssistant}
        >
          <h2 className="z-50 text-24">{assistant}</h2>
          <div className="w-full h-full hover:bg-black hover:opacity-20 absolute z-40" />
        </Link>
        <Link
          className="w-1/2 flex justify-center items-center relative"
          href={ctaLinkPhotographer}
        >
          <h2 className="z-50 text-24">{photographer}</h2>
          <div className="w-full h-full hover:bg-black hover:opacity-20 absolute z-40" />
        </Link>
      </div>

      <div className="w-[100vw] h-[100vh] overflow-hidden object-cover z-0">
        <MockImage
          image={image.props.image}
          alt="Shooting de Oriol Roma en plató"
        />
      </div>
    </div>
  )
}

export default Home
