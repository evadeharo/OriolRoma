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
  pageName: "FCB-UES",
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
        title: "2020-21 DHRugby FCB - UES",
        text: "Aqui un text",
        outstanding: "Tenim destacat?",
        photos: [
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/UES/FCBvsUES1.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/UES/FCBvsUES2.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/UES/FCBvsUES3.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/UES/FCBvsUES4.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/UES/FCBvsUES5.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/UES/FCBvsUES6.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/UES/FCBvsUES7.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/UES/FCBvsUES8.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/UES/FCBvsUES9.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/UES/FCBvsUES10.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/UES/FCBvsUES11.jpg",
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
