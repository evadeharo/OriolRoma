import { ImageType, ModuleType } from "types"
import Container from "./Container"
import Grid from "./Grid"
import MockImage from "./MockImage"
import Link from "./Link"

type PersonalOption = {
  text: string
  ctaLink: string
  image: ModuleType<ImageType>
}

type Props = {
  title: string
  text?: string
  options: Array<PersonalOption>
}

const PhotographySelector = ({
  title,
  text,
  options,
}: Props): React.ReactElement => {
  return (
    <Container>
      <Grid>
        <div className="col-start-1 col-span-4 leading-tight mb-6 md:mb-12 row-start-1">
          <h4 className="text-40 font-medium mb-6">{title}</h4>
          {text && <p className="text-14">{text}</p>}
        </div>

        {options.map((item, index) => {
          return (
            <div
              key={index}
              className={`col-span-4 md:col-span-5 h-full md:h-[23vw] flex justify-center items-center cursor-pointer
                ${index === 0 ? "col-start-1 md:col-start-8 md:row-start-1" : ""
                } 
                ${index === 1 ? "col-start-1 md:col-start-4 md:row-start-2" : ""
                } 
                ${index === 2 ? "col-start-1 md:col-start-1 md:row-start-3" : ""
                }`}
            >
              <Link href={item.ctaLink} className="w-full relative">
                <p className="z-50 text-20 leading-tight w-[80%] absolute bottom-0 p-4 text-white">
                  {item.text}
                </p>
                <MockImage
                  image={item.image.props.image}
                  alt=""
                  className="brightness-50 object-cover"
                />
              </Link>
            </div>
          )
        })}
      </Grid>
    </Container>
  )
}

export default PhotographySelector
