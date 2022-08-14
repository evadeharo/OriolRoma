import { useEffect, useState } from "react"
import { ImageType, ModuleType } from "types"
import Appear from "./Appear"
import Container from "./Container"
import Grid from "./Grid"
import HTMLText from "./HTMLText"
import MockImage from "./MockImage"
import Portal from "./Portal"
import Slider from "./Slider"

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
  vertical?: boolean
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
  vertical,
}: Props): React.ReactElement => {
  const landscape = ["landscape"].includes(pageName)
  const hernani = ["FCB-Hernani"].includes(pageName)
  const UES = ["FCB-UES"].includes(pageName)
  const BCN = ["workshop-bcn-design-week"].includes(pageName)

  const [oppened, setOppened] = useState(false)
  const [blockedScroll, setBlockedScroll] = useState(false)

  function setClickedImage(): void {
    setOppened(true)
    setBlockedScroll(true)
  }

  function setUnclickedImage(): void {
    setBlockedScroll(false)
    setOppened(false)
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    document.querySelector("body").style.overflow = blockedScroll
      ? "hidden"
      : "visible"
  }, [blockedScroll])

  return (
    <>
      <Container paddingTopPage="pt-12">
        <Grid>
          <div className="col-start-1 col-span-4 md:col-span-6 leading-tight font-medium mb-6 md:mb-12">
            <Appear>
              <h4 className="text-40">{title}</h4>
            </Appear>
          </div>

          <div
            className={`col-start-1 col-span-4 ${BCN ? "md:col-span-12" : "col-span-4"
              } text-14 flex flex-col md:flex-row justify-between items-start mb-6`}
          >
            <div className={` ${BCN ? "md:w-[32.5%]" : "md:w-full"} w-full`}>
              <Appear>
                <HTMLText className="mb-3" text={text} />
                {text2 && <HTMLText className="mt-6" text={text2} />}
              </Appear>
            </div>
            {textAdded && (
              <div className="w-full md:w-[32.5%] text-14 mt-6">
                <Appear>
                  <HTMLText text={textAdded} />
                </Appear>
              </div>
            )}
          </div>

          {text3 && (
            <div className="md:col-start-6 col-span-2 col-start-1 md:col-span-4 text-14">
              <Appear>
                <HTMLText className="mb-3" text={text3} />
              </Appear>
            </div>
          )}

          {outstanding && (
            <span className="col-span-4 md:col-span-6 md:col-start-6 text-gray-600 italic text-14">
              <Appear>{outstanding}</Appear>
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
                <button
                  onClick={() => setClickedImage()}
                  className="w-full h-full"
                >
                  <Appear>
                    <MockImage
                      image={item.image.props.image}
                      alt=""
                      className="object-cover"
                    />
                  </Appear>
                </button>
              </div>
            )
          })}
        </Grid>
      </Container>
      {oppened && (
        <Portal>
          <div className="fixed inset-0 flex items-end justify-center bg-black/90 z-[101]">
            <div className="relative w-full h-full">
              <button
                className="z-[101] cursor-pointer absolute top-6 right-8"
                onClick={() => setUnclickedImage()}
              >
                <div className="w-12 md:w-14 h-12 flex flex-col justify-center items-center bg-white">
                  <div className="bg-black h-[0.15rem] w-6 transform rotate-45 translate-y-0.5" />
                  <div className="bg-black h-[0.15rem] w-6 transform -rotate-45" />
                </div>
              </button>
            </div>
            <div className="h-full w-full absolute">
              <Slider items={photos} vertical={vertical} />
            </div>
          </div>
        </Portal>
      )}
    </>
  )
}

export default PhotographyGrid
