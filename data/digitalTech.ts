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
        title: "Photos that I took not being behind the camera",
        navigation: [
          {
            ctaLabel: "Workshop Barcelona Design Week",
            ctaLink: "/",
            image: imageModule({
              src: "/assets/images/digitalTech/bloque1.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            ctaLabel: "Shooting Laura Bolaños final fashion collection",
            ctaLink: "/",
            image: imageModule({
              src: "/assets/images/digitalTech/bloque2.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            ctaLabel: "Shooting final fashion collections LCI Barcelona 2020-2021",
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
        contact: "Contact me:",
        email: "o.romatufoto@gmail.com",
      },
    },
  ],
}

module.exports = data
