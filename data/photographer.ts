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
  pageName: "photographer",
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
      name: "DigitalSelector",
      key: "DigitalSelector",
      props: {
        title: "See what I enjoy doing",
        navigation: [
          {
            ctaLabel: "Landscape",
            ctaLink: "/",
            image: imageModule({
              src: "/assets/images/digitalTech/bloque1.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            ctaLabel: "Sports",
            ctaLink: "/",
            image: imageModule({
              src: "/assets/images/digitalTech/bloque2.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            ctaLabel: "Personal",
            ctaLink: "/",
            image: imageModule({
              src: "/assets/images/digitalTech/bloque3.jpg",
              width: 1200,
              height: 700,
            }),
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
