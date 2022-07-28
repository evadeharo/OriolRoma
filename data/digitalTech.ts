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
            ctaLink: "/digitalTech/workshop-bcn-design-week",
            image: imageModule({
              src: "/assets/images/digitalTech/designWeek/bloque1.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            ctaLabel: "Shooting Laura Bolaños final fashion collection",
            ctaLink: "/digitalTech/shooting-laura-bolaños",
            image: imageModule({
              src: "/assets/images/digitalTech/lauraBolaños/bloque2.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            ctaLabel: "Shooting final fashion collections LCI Barcelona 2020-2021",
            ctaLink: "/digitalTech/shooting-final-fashion-LCI",
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3.jpg",
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
