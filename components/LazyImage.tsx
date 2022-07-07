/* eslint-disable @next/next/no-img-element */
import { FC, ReactElement, useState, useRef, useEffect } from "react"
import makeAssetURL from "../lib/makeAssetURL"
import throttle from "../lib/throttle"
import WebP from "../lib/WebP"
import { APIAsset, ImageType } from "../types/common"
import useOnIntersection from "../hooks/useOnIntersection"

type Props = {
  image: APIAsset
  alt?: string
  className?: string
  draggable?: boolean
}

const Image: React.FC<ImageType & { className: string }> = ({
  image,
  alt,
  className = "",
  draggable = false,
}: Props): React.ReactElement | null => {
  let lastSize = -1
  const mainRef = useRef(null)
  const [imageSrc, setImageSrc] = useState("")
  const [externalVendorSrc, setExternalVendorSrc] = useState("")

  const wp = new WebP()
  const loadImage = (): void => {
    if (
      typeof image.externalVendor !== "undefined" &&
      ["instagram"].includes(image.externalVendor)
    ) {
      // console.log(
      //   "mainRef",
      //   mainRef.current,
      //   mainRef.current.offsetWidth,
      //   image
      // )
    }

    let newSize =
      image.size && image.size.width > image.sizes[0] ? image.sizes[0] : 0

    wp.isSupported((webpIsSupported) => {
      if (image.sizes && image.sizes.length) {
        image.sizes.forEach((size, i) => {
          if (
            (mainRef.current.offsetWidth !== 0 &&
              mainRef.current.offsetWidth > size &&
              image.size.width > size) ||
            (mainRef.current.offsetWidth === 0 && image.size.width > size)
          ) {
            newSize = size
            if (typeof image.sizes[i + 1] !== "undefined") {
              newSize = image.sizes[i + 1]
            }
          }
        })
      }

      if (newSize > lastSize) {
        const assetURL = makeAssetURL({
          asset: image,
          size: newSize,
          webp: webpIsSupported,
        })

        if (
          typeof image.externalVendor !== "undefined" &&
          ["instagram"].includes(image.externalVendor)
        ) {
          lastSize = newSize
          setExternalVendorSrc(`${process.env.NEXT_PUBLIC_API_URL}${assetURL}`)
        } else {
          const imageToLoad = new window.Image()
          imageToLoad.onload = () => {
            setImageSrc(assetURL)
            lastSize = newSize
          }
          imageToLoad.src = assetURL
        }
      }
    })
  }
  const throttleResize = throttle(loadImage, 1000)

  const intersecting = useOnIntersection(mainRef, undefined, {
    rootMargin: "300%",
  })

  useEffect(() => {
    if (externalVendorSrc && externalVendorSrc.length > 0) {
      const load = async (): Promise<boolean> => {
        const res = await fetch(externalVendorSrc)
        const text = await res.text()
        setImageSrc(text)
        return true
      }
      load()
    }
  }, [externalVendorSrc])

  useEffect(() => {
    if (!image) return
    if (intersecting) {
      loadImage()
      // window.addEventListener("resize", throttleResize)
    }
    return () => window.removeEventListener("resize", throttleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intersecting])

  if (imageSrc.includes("instagram")) {
    console.log("source", imageSrc)
  }

  if (!image) {
    return null
  }

  return (
    <div
      key={image.name || "unknown"}
      data-image
      className={className}
      ref={mainRef}
    >
      {imageSrc && imageSrc.length > 0 && (
        <img
          draggable={draggable}
          className={className}
          src={imageSrc}
          alt={alt}
        />
      )}
    </div>
  )
}

const ImageComponent: FC<Props> = ({ image, alt, className }): ReactElement => {
  if (!image) return null
  return <Image image={image} alt={alt} className={className} />
}

export default ImageComponent
