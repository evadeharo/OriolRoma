import { ImageType, ModuleType } from "types"
import MockImage from "./MockImage"
import Link from "./Link"
import Container from "./Container"
import Grid from "./Grid"
import Appear from "./Appear"

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
  return (
    <Container paddingVertical="relative py-4 md:py-6 lg:py-8 h-screen flex justify-center items-center">
      <Grid className="my-auto">
        <div className="col-span-4 h-max w-full relative">
          <Appear>
            <MockImage
              image={photographerImage.props.image}
              alt=""
              className="object-cover z-0"
            />
          </Appear>
        </div>
        <Link href={ctaLinkPhotographer} className="col-span-4">
          <Appear className="w-full h-full">
            <div className="bg-black w-full h-full flex items-end">
              <h2 className="text-24 text-white font-light p-4">{photographer}</h2>
            </div>
          </Appear>
        </Link>
        <div className="col-span-4 md:col-start-5 md:row-start-2 h-max w-full relative">
          <Appear>
            <MockImage
              image={assistantImage.props.image}
              alt=""
              className="object-cover z-0"
            />
          </Appear>
        </div>
        <div className="col-span-2 row-start-1 md:col-start-9 flex items-end leading-none">
          <Appear>
            <div className="font-medium uppercase text-40">
              <h1>{title}</h1>
            </div>
          </Appear>
        </div>
        <Link
          href={ctaLinkAssistant}
          className="col-span-4 md:col-start-9 row-start-2"
        >
          <Appear className="w-full h-full">
            <div className="bg-black w-full h-full flex items-end">
              <h2 className="text-24 text-white font-light p-4">{assistant}</h2>
            </div>
          </Appear>
        </Link>
      </Grid>
    </Container>
  )
}

export default Home
