import { ImageType, ModuleType } from "types"
import MockImage from "./MockImage"
import Link from "./Link"
import Container from "./Container"
import Grid from "./Grid"

type Props = {
  title: string
  assistant: string
  photographer: string
  ctaLinkAssistant: string
  ctaLinkPhotographer: string
  assistantImage: ModuleType<ImageType>
  photographerImage: ModuleType<ImageType>
}

const Home = ({
  title,
  assistant,
  photographer,
  ctaLinkAssistant,
  ctaLinkPhotographer,
  assistantImage,
  photographerImage,
}: Props): React.ReactElement => {
  console.log(photographerImage)

  return (
    <Container paddingVertical="relative py-4 md:py-6 lg:py-8 h-screen flex justify-center items-center">
      <Grid className="my-auto">
        <div className="leading-none uppercase text-46 md:col-start-5 col-span-4 md:row-start-1 flex items-end">
          <h1>{title}</h1>
        </div>
        <div className="col-span-4 h-max w-full relative">
          <MockImage
            image={photographerImage.props.image}
            alt=""
            className="brightness-50 object-cover z-0"
          />
          <Link
            href={ctaLinkAssistant}
            className="absolute inset-0 flex justify-center items-center z-50"
          >
            <h2 className="text-24 text-white">{assistant}</h2>
          </Link>
        </div>
        <div className="col-span-4 md:col-start-5 md:row-start-2 h-max w-full relative">
          <MockImage
            image={assistantImage.props.image}
            alt=""
            className="brightness-50 object-cover z-0"
          />
          <Link
            href={ctaLinkPhotographer}
            className="absolute inset-0 flex justify-center items-center z-50"
          >
            <h2 className="text-24 text-white">{photographer}</h2>
          </Link>
        </div>
      </Grid>
    </Container>
  )
}

export default Home
