import { ImageType, ModuleType } from "types"

export function imageModule({
  src,
  alt = null,
  width,
  height,
}: {
  src: string
  alt?: string
  width: number
  height: number
}): ModuleType<ImageType> {
  return {
    name: "DummyImage",
    key: Math.random().toString(),
    props: {
      image: {
        name: src,
        type: "image/jpeg",
        size: { width, height },
        originalName: "originalName",
        resizable: true,
        quality: 75,
        sizes: [100, 700, 1400, 2000],
      },
      alt,
    },
  }
}
