import Link from "./Link"
import Container from "./Container"
import Grid from "./Grid"
import MockImage from "./MockImage"
import { ImageType, ModuleType } from "types"
import Appear from "./Appear"

type NavigationImagesTypes = {
  ctaLink: string
  ctaLabel: string
  image: ModuleType<ImageType>
}

type Props = {
  title: string
  navigation: Array<NavigationImagesTypes>
}

const DigitalSelector = ({ title, navigation }: Props): React.ReactElement => {
  return (
    <Container paddingTopPage="pt-12">
      <Grid>
        <div className="col-start-1 md:col-span-5 col-span-4 row-start-1 leading-tight font-medium mb-12">
          <Appear>
            <h6 className="text-40">{title}</h6>
          </Appear>
        </div>

        {navigation.map((item, index) => {
          return (
            <div
              key={index}
              className={`col-span-4 md:col-span-5 h-full md:h-[23vw] flex justify-center items-center cursor-pointer
                ${index === 0 ? "md:col-start-8 col-start-1 md:row-start-1" : ""
                } 
                ${index === 1 ? "md:col-start-4 col-start-1 md:row-start-2" : ""
                } 
                ${index === 2 ? "md:col-start-1 col-start-1 md:row-start-3" : ""
                }`}
            >
              <Link href={item.ctaLink} className="w-full relative">
                <p className="z-40 text-20 leading-tight w-[80%] absolute bottom-0 p-4 text-white">
                  {item.ctaLabel}
                </p>
                <Appear>
                  <MockImage
                    image={item.image.props.image}
                    alt=""
                    className="brightness-50 object-cover"
                  />
                </Appear>
              </Link>
            </div>
          )
        })}
      </Grid>
    </Container>
  )
}

export default DigitalSelector
