import { ImageType, ModuleType } from "types"
import Container from "./Container"
import Grid from "./Grid"
import HTMLText from "./HTMLText"
import MockImage from "./MockImage"

type ImagesType = {
  image: ModuleType<ImageType>
}

type Props = {
  title: string
  text: string
  text2?: string
  text3?: string
  photos: Array<ImagesType>
}

const PhotographyGridMixedSizes = ({
  title,
  text,
  text2,
  text3,
  photos,
}: Props): React.ReactElement => {
  return (
    <Container paddingVertical="pb-0 pt-24 md:pt-12 xl:pt-24 bs:pt-32">
      <Grid>
        <div className="col-start-1 col-span-4 md:col-span-5 leading-tight font-medium mb-6 md:mb-12">
          <h4 className="text-40">{title}</h4>
        </div>

        <div className="col-start-1 col-span-4 text-14">
          <HTMLText className="mb-3" text={text} />
        </div>
        <div className="col-start-6 col-span-2 text-14">
          <HTMLText className="mb-6" text={text2} />
        </div>
        <div className="col-start-8 col-span-2 text-14">
          <HTMLText className="mb-6" text={text3} />
        </div>

        <div className="col-span-12 gap-6 flex">
          <div className="h-full w-[32%]">
            {photos.slice(0, 9).map((item, index) => {
              return (
                <div key={index} className="flex flex-col mb-6">
                  <MockImage
                    image={item.image.props.image}
                    alt=""
                    className="object-cover"
                  />
                </div>
              )
            })}
          </div>
          <div className="h-full w-[32%]">
            {photos.slice(11, 18).map((item, index) => {
              return (
                <div key={index} className="flex flex-col mb-6">
                  <MockImage
                    image={item.image.props.image}
                    alt=""
                    className="object-cover"
                  />
                </div>
              )
            })}
          </div>
          <div className="h-full w-[32%]">
            {photos.slice(20, 29).map((item, index) => {
              return (
                <div key={index} className="flex flex-col mb-6">
                  <MockImage
                    image={item.image.props.image}
                    alt=""
                    className="object-cover"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </Grid>
    </Container>
  )
}

export default PhotographyGridMixedSizes
