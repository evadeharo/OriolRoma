const makeAssetURL = ({ asset, size, webp = false }) => {
  if (!asset.resizable) {
    if (asset.externalApi) {
      return asset.externalApiURLs[0]
    }
    return `${process.env.NEXT_PUBLIC_ASSETS_URL}${asset.name}`
  }

  if (asset.externalApi) {

    if (!asset.externalApiURLs) {
      return false
    }

    if (asset.externalApiURLs.length === 1) {
      return asset.externalApiURLs[0]
    }

    let index = asset.sizes.indexOf(size) || 0
    if (index === -1) {
      index = 0
    }
    return asset.externalApiURLs[index]
  }

  const parts = asset.name.split('.')
  const extension = parts[parts.length - 1]
  parts.pop()
  return `${process.env.NEXT_PUBLIC_ASSETS_URL}${process.env.NEXT_PUBLIC_ASSETS_URL_RESIZED}${parts.join('')}-w${size}-q${asset.quality}.${webp ? 'webp' : extension}`
}

export default makeAssetURL