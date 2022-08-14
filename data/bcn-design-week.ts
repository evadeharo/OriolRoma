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
  pageName: "bcn-design-week",
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
        text2: `##Fashion photography with Marie Beriestain
        \nThis specific workshop was about introducing people to the world of fashion photography. How a shooting was planned, prepared and executed. The event was hosted in LCI Barcelona by Marie Beriestain, about 10 people attended the workshop.
        
        \n**Photographer**
        \nMarie Beriestain
        \n**Photo Assistant & Digital Tech**
        \nOriol Roma i Turull
        `,
        photos: [
          {
            image: imageModule({
              src: "/assets/images/digitalTech/designWeek/bloque1.jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/designWeek/bloque1(2).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/designWeek/bloque1(3).jpg",
              width: 1365,
              height: 2048,
            }),
          },
        ],
        textAdded: `##Food photography with Corina Landa
        \nThis specific workshop was about creating a bread sculpture, taking inspiration in a serie by Corina Landa; who was also the photographer hosting the event. The workshop took place in LCI Barcelona, with about 10 people attending.
        
        \n**Photographer**
        \nCorina Landa
        \n**Photo Assistant & Digital Tech**
        \nOriol Roma i Turull
        \n**Art Direction**
        \nCristina Hernández
        `,
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
