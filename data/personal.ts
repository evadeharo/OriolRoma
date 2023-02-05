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
  pageName: "personal",
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
        title: "Personal Work",
        text: "Here you will find projects that don’t fit precisely in the Landscape or Sports category because of their extension or objective.",
        options: [
          {
            text: "Our night",
            image: imageModule({
              src: "/assets/images/photographer/personal/ourNight/on1.jpg",
              width: 1200,
              height: 700,
            }),
            ctaLink: "/photographer/personal/our-night"
          },
          {
            text: "Falles d'Andorra la Vella - 2019",
            image: imageModule({
              src: "/assets/images/photographer/personal/falles/falles1.jpg",
              width: 1200,
              height: 700,
            }),
            ctaLink: "/photographer/personal/falles",
          },
        ]
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
        email: "oriol@oromatu.com",
      },
    },
  ],
}

module.exports = data
