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
  pageName: "landscape",
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
        title: "Landscape",
        text: "One of the main reasons why I love landscape photography is that I’ve been in contact with nature since I was a kid. I remember spending the weekends and also my summer vacations in a town in La Cerdanya.",
        text2: "I fell in love with the mountains and its landscapes. I like to consider my landscape photography as a way of showing that passion and love that I have.",
        vertical: false,
        photos: [
          {
            image: imageModule({
              src: "/assets/images/photographer/landscapes/landscape1.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/landscapes/landscape2.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/landscapes/landscape3.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/landscapes/landscape4.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/landscapes/landscape5.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/landscapes/landscape6.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/landscapes/landscape7.jpg",
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
