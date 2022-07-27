import { ImageType, ModuleType } from "types"
import Container from "./Container"
import Grid from "./Grid"
import MockImage from "./MockImage"

type Props = {
  text: string
  subtext: string
  image: ModuleType<ImageType>
  contact: string
  email: string
  pretext: string
}

const InformationComponent = ({
  text,
  subtext,
  image,
  contact,
  email,
  pretext,
}: Props): React.ReactElement => {
  return (
    <Container>
      <Grid>
        <div className="flex flex-col col-span-5 col-start-2">
          <span className="font-medium">{pretext}</span>
          <div className="font-medium mb-6">
            <span className="pr-1">{contact}</span>
            <a
              href="mailto:o.romatufoto@gmail.com"
              className="border-b border-black"
            >
              {email}
            </a>
          </div>
          <p className="mb-3">{text}</p>
          <p className="mb-6">{subtext}</p>
        </div>
        <div className="col-span-4 col-start-8 bg-red-500">
          <MockImage
            image={image.props.image}
            className="object-cover"
            alt=""
          />
        </div>
      </Grid>
    </Container>
  )
}

export default InformationComponent
