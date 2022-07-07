// const fetch = require('node-fetch')
require('dotenv').config({
  path: `${__dirname}/../.env.${process.env.NODE_ENV}`
})
const fs = require('fs-extra')
const pagesDir = __dirname + '/../pages/'
const staticRoutesDir = __dirname + '/../staticdata/'
const staticRoutesFilename = '_staticroutes.js';

// (async (apiURL) => {
(async () => {
  const process = async () => {
    const staticConfig = require('../data/config')

    // eslint-disable-next-line no-undef
    // const response = await fetch(
    //   `${apiURL}config`,
    //   {
    //     method: 'POST',
    //   }
    // )

    // const data = await response.json()
    // const routes = [...data.routes, ...staticConfig.map(r => {
    const routes = [...staticConfig.map(r => {
      r.isLocal = true 
      delete r.data
      r.data = []
      return r
    })] // we merge the static config with the dynamic config

    await fs.emptyDir(pagesDir)
    
    await fs.copy(__dirname + '/pages', pagesDir)
    
    await fs.ensureDir(staticRoutesDir)
    fs.writeFileSync(`/${staticRoutesDir}${staticRoutesFilename}`, `module.exports = JSON.parse('${JSON.stringify(routes)}')`)

    const generatedPages = []

    const text = fs.readFileSync(`${__dirname}/templates/dynamic.txt`, 'utf8')
    // for await (const route of data.routes) {
    for await (const route of routes) {
      if (route.dynamic) {
        const routes = [...route.route]
        let url = route.api.url
        if (route.multiple) {
          routes.push('[id]')
          url = `${url}&id=\${params.id}`
        } else {
          routes.push('index')
        }
        const folders = [...routes]
        folders.pop()
        await fs.ensureDir(`${pagesDir}/${folders.join('/')}/`)
        const textForRoute = text.replace('__URL__', url)
        fs.writeFileSync(`/${pagesDir}${routes.join('/')}.tsx`, textForRoute)
        generatedPages.push(routes.join('/'))
      }
    }

    console.log(`++++ ${generatedPages.length} dynamic pages generated ++++`)
    console.log(generatedPages.sort().join('\n'))
    console.log('++++')
  }


  try {
      await process()
  } catch (e) {
      console.log('Error', e)
  }
})(process.env.NEXT_PUBLIC_API_URL)