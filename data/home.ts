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
        text: "Photo Assistant | Digital Tech",
        subtext: "Photographer",
        image: imageModule({
          src: "/assets/welcome.jpg",
          width: 440,
          height: 628,
        }),
      },
    },
  ],
}

module.exports = data
