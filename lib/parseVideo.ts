const parseVideo = (url) => {
  url.match(
    /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/
  )

  let type = "none"
  if (RegExp.$3.indexOf("youtu") > -1) {
    type = "youtube"
  } else if (RegExp.$3.indexOf("vimeo") > -1) {
    type = "vimeo"
  }

  return {
    type: type,
    id: RegExp.$6,
  }
}

export default parseVideo
