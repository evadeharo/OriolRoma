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
  pageName: "workshop-bcn-design-week",
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
      name: "PhotographyGrid",
      key: "PhotographyGrid",
      props: {
        title: "Barcelona Design Week Workshops with Marie Beriestain & Corina Landa",
        text: "Every year Barcelona organizes the Design Week in which LCI Barcelona takes part hosting a few workshops regarding fashion and photography. This year I had the opportunity to assist in two different workshops.",
        photos: [
          {
            image: imageModule({
              src: "/assets/images/digitalTech/designWeek/bloque1.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/designWeek/bloque1(2).jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/designWeek/bloque1(3).jpg",
              width: 1200,
              height: 700,
            }),
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
