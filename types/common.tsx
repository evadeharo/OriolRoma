export type PageType = {
  meta: {
    canonical: string
    title: string
    description: string
    image: string
  }
  language: string
  pageName: string
  components: ModuleType[]
}

export type ModuleType<T = Record<string, unknown>> = {
  name: string
  key: string
  props: T
  structure?: ModuleType[]
}

export type APIAssetSize = {
  width: number
  height: number
}

export type APIAsset = {
  name?: string
  externalApi?: boolean
  externalVendor?: string
  resizable?: boolean
  size?: APIAssetSize
  sizes?: number[]
  externalApiURLs?: string[]
  type: string
  originalName: string
  quality: number
  alt?: string
}

export type ImageType = {
  image: APIAsset
  alt?: string
}
