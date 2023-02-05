import Head from "next/head"
import ComponentIterator from "./ComponentIterator"
import { PageContext, usePageContext } from "context/PageContext"
import { Analytics } from "@vercel/analytics/react"

export default function Page({
  meta,
  pageName,
  components,
  basePath,
}): React.ReactElement {
  const pageContextValue = usePageContext()

  return (
    <>
      <Head>
        {meta && (
          <>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width, maximum-scale=1.0"
            />
          </>
        )}
      </Head>
      <PageContext.Provider value={pageContextValue}>
        <div className="relative">
          {components && (
            <ComponentIterator pageName={pageName} modules={components} />
          )}
          <Analytics />
        </div>
      </PageContext.Provider>
    </>
  )
}
