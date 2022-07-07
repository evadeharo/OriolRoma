import { isEqual } from "lodash"
import MainPage from "components/MainPage"
import data from "staticdata/_staticroutes"

const Page = (props) => <MainPage {...props} />
export default Page

export async function getStaticPaths() {
  try {
    const routesData = data
      .filter((route) => route.dynamic !== true && route.route.length > 0)
      .map((route) => ({
        route: route.route,
        // url: typeof route.api !== "undefined" ? route.api.url : "",
      }))

    const paths = routesData.map((route) => ({
      params: {
        ...route,
      },
    }))

    return {
      paths,
      fallback: false,
    }
  } catch (e) {
    console.log("Error getStaticPaths", e)
    return {
      paths: [],
      fallback: false,
    }
  }
}

export async function getStaticProps({ params }) {
  const routesData = data
    .filter((route) => route.dynamic !== true)
    .map((route) => ({
      route: route.route,
      isLocal: route.isLocal || false,
      url: typeof route.api !== "undefined" ? route.api.url : "",
    }))

  const route = routesData.find((item) => isEqual(item.route, params.route))

  if (typeof route.isLocal !== "undefined" && route.isLocal === true) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const data = require("../data/" + route.url)
    return {
      props: data,
    }
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${route.url}`)
    const data = await res.json()
    if (!data) {
      return {
        props: {},
      }
    }
    return {
      props: data,
    }
  } catch (e) {
    console.log("Error getStaticProps", e)
    return {
      props: {},
    }
  }
}
