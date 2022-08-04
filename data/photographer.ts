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
      name: "Breadcrumb",
      key: "Breadcrumb",
      props: {},
    },
    {
      name: "DigitalSelector",
      key: "DigitalSelector",
      props: {
        title: "See what I enjoy doing",
        navigation: [
          {
            ctaLabel: "Landscape",
            ctaLink: "/photographer/landscape",
            image: imageModule({
              src: "/assets/images/photographer/portada1.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            ctaLabel: "Sport",
            ctaLink: "/photographer/sport",
            image: imageModule({
              src: "/assets/images/photographer/portada2.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            ctaLabel: "Personal",
            ctaLink: "/photographer/personal",
            image: imageModule({
              src: "/assets/images/photographer/portada3.jpg",
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
        email: "o.romatufoto@gmail.com",
      },
    },
  ],
}

module.exports = data
