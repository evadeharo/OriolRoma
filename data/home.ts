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
  pageName: "home",
  components: [
    {
      name: "Home",
      key: "Home",
      props: {
        title: "Oriol Roma i Turull",
        assistant: "Photo Assistant | Digital Tech",
        photographer: "Photographer",
        image: imageModule({
          src: "/assets/welcome.jpg",
          width: 1200,
          height: 700,
        }),
        ctaLinkAssistant: "/digitalTech",
        ctaLinkPhotographer: "/photographer",
      },
    },
  ],
}

module.exports = data
