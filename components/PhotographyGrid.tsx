import { ImageType, ModuleType } from "types"
import Container from "./Container"
import Grid from "./Grid"
import MockImage from "./MockImage"

type ImagesType = {
  image: ModuleType<ImageType>
}

type Props = {
  title: string
  text: string
  text2: string
  photos: Array<ImagesType>
  pageName: string
  outstanding?: string
}

const PhotographyGrid = ({
  title,
  text,
  text2,
  photos,
  pageName,
  outstanding,
}: Props): React.ReactElement => {
  const ourNight = ["our-night"].includes(pageName)

  return (
    <Container>
      <Grid>
        <div className="col-start-1 col-span-5 leading-tight font-medium mb-12">
          <h4 className="text-40">{title}</h4>
        </div>

        <div className="col-start-1 col-span-4 text-14">
          <p className="mb-3">{text}</p>
          <p className="mb-6">{text2}</p>
        </div>

        {outstanding && (
          <span className="col-span-6 col-start-6 text-gray-600 italic text-14">
            {outstanding}
          </span>
        )}

        {photos.map((item, index) => {
          console.log(item)
          return (
            <div
              key={index}
              className={`col-span-4 ${index === 0 && !ourNight ? "col-start-9" : ""
                } ${index === 0 && ourNight ? "col-start-1" : ""}`}
            >
              <MockImage image={item.image.props.image} alt="" />
            </div>
          )
        })}
      </Grid>
    </Container>
  )
}

export default PhotographyGrid
