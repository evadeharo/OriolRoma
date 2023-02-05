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
  photos: Array<ImagesType>
}

const PhotographyGridMixedSizes = ({
  title,
  text,
  text2,
  text3,
  photos,
}: Props): React.ReactElement => {

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
      <Container
        paddingTopPage="pt-6 md:pt-0 bs:pt-8 sbs:pt-12"
        paddingVertical="pb-0 pt-24 md:pt-12 xl:pt-24 bs:pt-32"
      >
        <Grid>
          <div className="col-start-1 col-span-4 md:col-span-5 leading-tight font-medium mb-6 md:mb-12">
            <Appear>
              <h4 className="text-40">{title}</h4>
            </Appear>
          </div>

          <div className="col-start-1 col-span-4 text-14">
            <Appear>
              <HTMLText className="mb-3" text={text} />
            </Appear>
          </div>
          <div className="md:col-start-6 col-span-2 col-start-1 md:col-span-2 text-14">
            <Appear>
              <HTMLText className="mb-2" text={text2} />
            </Appear>
          </div>
          <div className="md:col-start-8 col-span-2 col-start-1 md:col-span-2 text-14">
            <Appear>
              <HTMLText className="mb-6" text={text3} />
            </Appear>
          </div>

          <div className="col-span-4 md:col-span-12 md:gap-6 flex flex-col md:flex-row">
            <div className="h-full w-full md:w-[32%]">
              {photos.slice(0, 9).map((item, index) => {
                return (
                  <div key={index} className="flex flex-col mb-6">
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
            </div>
            <div className="h-full w-full md:w-[32%]">
              {photos.slice(11, 18).map((item, index) => {
                return (
                  <div key={index} className="flex flex-col mb-6">
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
            </div>
            <div className="h-full w-full md:w-[32%]">
              {photos.slice(20, 29).map((item, index) => {
                return (
                  <div key={index} className="flex flex-col mb-6">
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
            </div>
          </div>
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
              <Slider items={photos} />
            </div>
          </div>
        </Portal>
      )}
    </>
  )
}

export default PhotographyGridMixedSizes
