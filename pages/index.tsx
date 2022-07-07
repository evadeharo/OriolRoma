import React from "react"
import fetch from "node-fetch"
import MainPage from "components/MainPage"
import data from "staticdata/_staticroutes"

const Page = props => <MainPage {...props} />
export default Page

export async function getStaticProps() {
  const routesData = data
    .filter(route => route.dynamic !== true)
    .map(route => ({
      route: route.route,
      isLocal: route.isLocal || false,
      url: typeof route.api !== "undefined" ? route.api.url : "",
    }))

  const route = routesData.find(item => item.route.length === 0)

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
