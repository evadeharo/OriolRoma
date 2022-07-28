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
  pageName: "FCB-Hernani",
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
        title: "2018-19 Copa del Rey Semifinals Hernani vs FCB",
        text: "Aquí un texto",
        outstanding: "Hay destacado?",
        photos: [
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/Hernani/HernanivsFCB1.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/Hernani/HernanivsFCB2.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/Hernani/HernanivsFCB3.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/Hernani/HernanivsFCB4.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/Hernani/HernanivsFCB5.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/Hernani/HernanivsFCB6.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/Hernani/HernanivsFCB7.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/Hernani/HernanivsFCB8.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/Hernani/HernanivsFCB9.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/Hernani/HernanivsFCB10.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/Hernani/HernanivsFCB11.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/Hernani/HernanivsFCB12.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/Hernani/HernanivsFCB13.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/Hernani/HernanivsFCB14.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/Hernani/HernanivsFCB15.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/sport/Hernani/HernanivsFCB16.jpg",
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
