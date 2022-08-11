import Link from "next/link"
import { ImageType, ModuleType } from "types"
import Appear from "./Appear"
import Container from "./Container"
import Grid from "./Grid"
import HTMLText from "./HTMLText"
import MockImage from "./MockImage"
import instagram from "./svg/instagram"
import linkedin from "./svg/linkedin"

type Props = {
  text: string
  subtext: string
  image: ModuleType<ImageType>
  contact: string
  email: string
  pretext: string
  ctaLinkLinkedin: string
  ctaLinkInstagram: string
}

const InformationComponent = ({
  text,
  subtext,
  image,
  contact,
  email,
  pretext,
  ctaLinkLinkedin,
  ctaLinkInstagram,
}: Props): React.ReactElement => {
  return (
    <Container>
      <Grid>
        <div className="flex flex-col col-span-4 md:col-span-6 col-start-1">
          <Appear>
            <span className="font-medium mb-6 md:mb-2 text-24 leading-none">
              {pretext}
            </span>
          </Appear>
          <Appear>
            <div className="hidden md:block font-medium mb-8">
              <span className="pr-1">{contact}</span>
              <a
                href="mailto:o.romatufoto@gmail.com"
                className="border-b border-black"
              >
                {email}
              </a>
            </div>
          </Appear>
          <Appear>
            <HTMLText className="mb-3" text={text} />
            <HTMLText className="mb-3" text={subtext} />
          </Appear>
          <Appear>
            <div className="flex w-max h-10 mb-3 md:mb-0 gap-3 mt-4">
              <Link href={ctaLinkInstagram} passHref>
                <a target="_blank">
                  <div className="transform hover:-translate-y-1 hover:bg-black hover:text-white hover:transition w-10 h-10 border border-black cursor-pointer flex justify-center items-center">
                    {instagram}
                  </div>
                </a>
              </Link>
              <Link href={ctaLinkLinkedin} passHref>
                <a target="_blank">
                  <div className="transform hover:-translate-y-1 hover:bg-black hover:text-white hover:transition w-10 h-10 border border-black cursor-pointer flex justify-center items-center">
                    {linkedin}
                  </div>
                </a>
              </Link>
            </div>
          </Appear>
        </div>
        <div className="col-span-4 md:col-start-9">
          <Appear>
            <MockImage
              image={image.props.image}
              className="object-cover"
              alt=""
            />
          </Appear>
        </div>
        <div className="md:hidden font-medium mb-6 col-span-4">
          <Appear>
            <span className="pr-1">{contact}</span>
            <a
              href="mailto:o.romatufoto@gmail.com"
              className="border-b border-black"
            >
              {email}
            </a>
          </Appear>
        </div>
      </Grid>
    </Container>
  )
}

export default InformationComponent
