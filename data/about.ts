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
  pageName: "about",
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
      name: "InformationComponent",
      key: "InformationComponent",
      props: {
        pretext: "Photo Assistant | Digital Tech | Photographer",
        contact: "Find me",
        email: "o.romatu@gmail.com",
        text: `I am a photo assistant, digital tech and photographer based in Barcelona.
        \n\nI grew up between the Catalan Pyrinees and Barcelona.
        \n\nSports and mountains are my passions.`,
        subtext: `Schooling / Specific education: 
          \n- LCI Education Barcelona Diploma Superior en Fotografía Digital, 2019-2022 
          \n- LCI Education Barcelona Máster en Fotografía de Moda y Publicitaria, (currently)
          \n\n
          
          \n What is appealing to me? 
          \n- Photography assistant & Digital tech 
          \n- Landscape photography 
          \n- Sports photography 
          \n- Drone photography and videography 
          \n- Film making 
          \n- 3D, rendering and integration`,
        image: imageModule({
          src: "/assets/images/ORoma.jpeg",
          width: 1200,
          height: 1200,
        }),
      },
    },
  ],
}

module.exports = data
