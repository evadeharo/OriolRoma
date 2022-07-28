import { FC } from "react"
import { ImageType } from "types"
import Image from "next/image"

type Props = ImageType & {
  className?: string
  containerClassName?: string
}

const MockImage: FC<Props> = ({
  image,
  alt,
  className,
  containerClassName,
}) => {
  return (
    <div className={containerClassName}>
      <Image
        src={image.name}
        alt={alt}
        className={className}
        height={image.size.height}
        width={image.size.width}
        layout="responsive"
      />
    </div>
  )
}

export default MockImage
