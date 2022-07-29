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
  pageName: "shooting-laura-bolaños",
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
        title: "Shooting Laura Bolaños final fashion collection",
        text: `Fashion shooting for Laura Bolaños Arnal by Rita Salgado. Final fashion collection for her degree. Total of 6 looks, the idea behind the shooting was to get 4 full body images and some detail shots. \n The shooting took place in Artspace Barcelona.
        
        \n ## Team

        \n **Photographer**
        \n Rita Salgado
        \n **Photo Assistant & Digital Tech**
        \n Oriol Roma i Turull
        \n **Designer**
        \n Laura Bolaños Arnal`,
        outstanding: "Tenim destacat?",
        photos: [
          {
            image: imageModule({
              src: "/assets/images/digitalTech/lauraBolaños/bloque2.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/lauraBolaños/bloque2(2).jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/lauraBolaños/bloque2(3).jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/lauraBolaños/bloque2(4).jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/lauraBolaños/bloque2(5).jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/lauraBolaños/bloque2(6).jpg",
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
