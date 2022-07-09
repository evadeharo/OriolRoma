import { PageType } from "../types"
import { imageModule } from "./helpers"

const data: PageType = {
  meta: {
    title: "Oriol Roma",
    description: "Oriol Roma Portafolio",
    canonical: "",
    image: "",
  },
  language: "es",
  pageName: "sport",
  components: [
    {
      name: "Header",
      key: "Header",
      props: {
        logo: "Oriol Roma",
        ctaLinkHome: "/",
        navigation: [
          {
            ctaLabel: "Photo Assistant",
            ctaLink: "/digitalTech",
          },
          {
            ctaLabel: "Photography",
            ctaLink: "/photographer",
          },
          {
            ctaLabel: "Information",
            ctaLink: "/about",
          },
        ],
      },
    },
    {
      name: "PhotographySelector",
      key: "PhotographySelector",
      props: {
        logo: "See what I enjoy doing",
        navigation: [
          {
            ctaLabel: "Landscape",
            ctaLink: "/",
          },
          {
            ctaLabel: "Sports",
            ctaLink: "/",
          },
          {
            ctaLabel: "Personal",
            ctaLink: "/",
          },
        ],
      },
    },
    {
      name: "Footer",
      key: "Footer",
      props: {
        title: "Oriol Roma i Turull",
        text: "Photo Assistant | Digital Tech | Photographer",
        copyright: "© Oriol Roma 2022",
        contact: "Find me",
        email: "mailto:o.romatufoto@gmail.com",
      },
    },
  ],
}

module.exports = data
