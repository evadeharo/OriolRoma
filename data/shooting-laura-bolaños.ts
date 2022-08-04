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
      name: "Breadcrumb",
      key: "Breadcrumb",
      props: {},
    },
    {
      name: "PhotographyGrid",
      key: "PhotographyGrid",
      props: {
        title: "Shooting Laura Bolaños final fashion collection",
        text: `Fashion shooting for Laura Bolaños Arnal by Rita Salgado. Final fashion collection for her degree. Total of 6 looks, the idea behind the shooting was to get 4 full body images and some detail shots.\nThe shooting took place in Artspace Barcelona.`,
        text3: `**Photographer**
        \nRita Salgado
        \n**Photo Assistant & Digital Tech**
        \nOriol Roma i Turull
        \n**Designer**
        \nLaura Bolaños Arnal`,
        photos: [
          {
            image: imageModule({
              src: "/assets/images/digitalTech/lauraBolaños/bloque2.jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/lauraBolaños/bloque2(2).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/lauraBolaños/bloque2(3).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/lauraBolaños/bloque2(4).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/lauraBolaños/bloque2(5).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/lauraBolaños/bloque2(6).jpg",
              width: 1365,
              height: 2048,
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
