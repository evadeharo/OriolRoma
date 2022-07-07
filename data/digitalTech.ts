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
  pageName: "digital-tech",
  components: [
    {
      name: "Header",
      key: "Header",
      props: {
        logo: "Oriol Roma",
        navigation: [
          {
            ctaLabel: "Photo Assistant",
            ctaLink: "/",
          },
          {
            ctaLabel: "Photography",
            ctaLink: "/",
          },
          {
            ctaLabel: "Information",
            ctaLink: "/",
          },
        ],
      },
    },
    {
      name: "DigitalSelector",
      key: "DigitalSelector",
      props: {
        logo: "Photos that I took not being behind the camera",
        navigation: [
          {
            ctaLabel: "Workshop Barcelona Design Week",
            ctaLink: "/",
          },
          {
            ctaLabel: "Shooting Laura Bolaños final fashion collection",
            ctaLink: "/",
          },
          {
            ctaLabel: "Shooting final fashion collections LCI Barcelona 2020-2021",
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
