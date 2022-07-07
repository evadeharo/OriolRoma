import { FC } from "react"
import { ImageType } from "types"
import Image from "next/image"

type Props = ImageType & {
  className?: string
}

const MockImage: FC<Props> = ({ image, alt, className = "" }) => {
  return (
    <Image
      src={image.name}
      alt={alt}
      className={className}
      height={image.size.height}
      width={image.size.width}
      layout="responsive"
    />
  )
}

export default MockImage
