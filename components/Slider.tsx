import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { ImageType, ModuleType } from "types"
import MockImage from "./MockImage"

type ImagesType = {
  image: ModuleType<ImageType>
}

type Props = {
  items: ImagesType[]
  vertical?: boolean
}

const Slider: React.FC<Props> = ({ items, vertical = true }: Props): React.ReactElement => {
  const [width, setWidth] = useState<number>(0)
  const carousel = useRef<HTMLDivElement>()
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const nextSlide = (): void => {
    setActiveIndex(activeIndex + 1)
  }
  const previousSlide = (): void => {
    setActiveIndex(activeIndex - 1)
  }

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  useEffect(() => {
    if (items) {
      const hasProps = items.find((i) =>
        Object.prototype.hasOwnProperty.call(i, "props")
      )
      if (!hasProps) {
        const newItems = []
        items.forEach((i, index) => {
          newItems.push({ name: "Card", key: `Card-${index}`, props: i })
        })
      }
    }
  }, [items])

  return (
    <div
      ref={carousel}
      className="overflow-hidden text-primary w-full h-full flex items-center justify-center"
    >
      <motion.div
        drag="x"
        className="flex items-stretch h-max"
        dragConstraints={{ right: width, left: -width }}
        whileTap={{ cursor: "grabbing" }}
        onPanEnd={(e, { offset }) => {
          if (offset.x < 0 && activeIndex !== items.length - 1) {
            nextSlide()
          }
          if (offset.x > 0 && activeIndex !== 0) {
            previousSlide()
          }
        }}
      >
        {items &&
          items.map((item, index) => {
            return (
              <div
                key={index}
                className={` ${vertical ? "w-[25vw]" : "w-[50vw]"} h-max ml-6`}
              >
                <MockImage
                  image={item.image.props.image}
                  alt=""
                  className="pointer-events-none"
                />
              </div>
            )
          })}
      </motion.div>
    </div>
  )
}

export default Slider
