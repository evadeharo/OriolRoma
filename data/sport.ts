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
        title: "Sports",
        options: [
          {
            text: "Video for FCB Rugby “Legado”",
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/portada1.jpg",
              width: 1200,
              height: 700,
            }),
            ctaLink: "/photographer/sport/legado",
          },
          {
            text: "2020-21 DHRugby FCB - UES",
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/portada2.jpg",
              width: 1200,
              height: 700,
            }),
            ctaLink: "/photographer/sport/FCB-UES",
          },
          {
            text: " 2018-19 Copa del Rey Semifinals Hernani vs FCB",
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/portada3.jpg",
              width: 1200,
              height: 700,
            }),
            ctaLink: "/photographer/sport/FCB-Hernani",
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
        email: "o.romatufoto@gmail.com",
      },
    },
  ],
}

module.exports = data
