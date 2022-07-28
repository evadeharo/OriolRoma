import { ImageType, ModuleType } from "types"
import Container from "./Container"
import Grid from "./Grid"
import HTMLText from "./HTMLText"
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
        <div className="flex flex-col col-span-4 md:col-span-6 col-start-1">
          <span className="font-medium mb-6 md:mb-2 text-24 leading-none">{pretext}</span>
          <div className="hidden md:block font-medium mb-8">
            <span className="pr-1">{contact}</span>
            <a
              href="mailto:o.romatufoto@gmail.com"
              className="border-b border-black"
            >
              {email}
            </a>
          </div>
          <HTMLText className="mb-3" text={text} />
          <HTMLText className="mb-6" text={subtext} />
        </div>
        <div className="col-span-4 md:col-start-9">
          <MockImage
            image={image.props.image}
            className="object-cover"
            alt=""
          />
        </div>
        <div className="md:hidden font-medium mb-6 col-span-4">
          <span className="pr-1">{contact}</span>
          <a
            href="mailto:o.romatufoto@gmail.com"
            className="border-b border-black"
          >
            {email}
          </a>
        </div>
      </Grid>
    </Container>
  )
}

export default InformationComponent
