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
    <div className="relative h-full">
      <div className="absolute w-2/3 leading-none md:w-full top-2 md:top-0 left-0 text-white z-50 uppercase text-40 font-medium pl-6 pt-3">
        <h1>{title}</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center text-center absolute top-0 left-0 text-white w-full h-full">
        <Link
          className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-24 items-center relative mb-24 md:mb-0"
          href={ctaLinkAssistant}
        >
          <h2 className="z-50 text-24">{assistant}</h2>
        </Link>
        <Link
          className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-24 items-center relative"
          href={ctaLinkPhotographer}
        >
          <h2 className="z-50 text-24">{photographer}</h2>
        </Link>
      </div>

      <div className="h-screen w-auto md:w-full overflow-hidden z-0 brightness-50">
        <img
          src="/assets/welcome.jpg"
          alt=""
          className="h-screen md:h-auto md:w-full object-cover "
        />
      </div>
    </div>
  )
}

export default Home
