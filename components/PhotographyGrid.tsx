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
  textAdded?: string
  photos: Array<ImagesType>
  pageName: string
  outstanding?: string
}

const PhotographyGrid = ({
  title,
  text,
  text2,
  text3,
  photos,
  pageName,
  outstanding,
  textAdded,
}: Props): React.ReactElement => {
  const landscape = ["landscape"].includes(pageName)
  const hernani = ["FCB-Hernani"].includes(pageName)
  const UES = ["FCB-UES"].includes(pageName)
  const BCN = ["workshop-bcn-design-week"].includes(pageName)

  return (
    <Container>
      <Grid>
        <div className="col-start-1 col-span-4 md:col-span-6 leading-tight font-medium mb-6 md:mb-12">
          <h4 className="text-40">{title}</h4>
        </div>

        <div
          className={`col-start-1 col-span-4 ${BCN ? "md:col-span-12" : "col-span-4"
            } text-14 flex flex-col md:flex-row justify-between items-start mb-6`}
        >
          <div className={` ${BCN ? "md:w-[32.5%]" : "md:w-full"} w-full`}>
            <HTMLText className="mb-3" text={text} />
            {text2 && <HTMLText className="mt-6" text={text2} />}
          </div>
          {textAdded && (
            <div className="w-full md:w-[32.5%] text-14 mt-6">
              <HTMLText text={textAdded} />
            </div>
          )}
        </div>

        {text3 && (
          <div className="md:col-start-6 col-span-2 col-start-1 md:col-span-4 text-14">
            <HTMLText className="mb-3" text={text3} />
          </div>
        )}

        {outstanding && (
          <span className="col-span-4 md:col-span-6 md:col-start-6 text-gray-600 italic text-14">
            {outstanding}
          </span>
        )}

        {photos.map((item, index) => {
          return (
            <div
              key={index}
              className={`col-span-4
                ${(index === 0 && landscape) ||
                  (index === 0 && hernani) ||
                  (index === 0 && UES)
                  ? "col-start-1 md:col-start-9"
                  : ""
                } ${(index === 0 && !landscape) ||
                  (index === 0 && !hernani) ||
                  (index === 0 && !UES)
                  ? "col-start-1"
                  : ""
                }`}
            >
              <MockImage
                image={item.image.props.image}
                alt=""
                className="object-cover"
              />
            </div>
          )
        })}
      </Grid>
    </Container>
  )
}

export default PhotographyGrid
