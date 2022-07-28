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
  pageName: "our-night",
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
        title: "Our night",
        text: "“Our night” was my first approach to low-light photography. Its main objective was to show and criticise the light pollution our cities create. In order to avoid light inconsistencies, I started taking pictures with the same ISO, shutter speed, diaphragm aperture and white balance (ISO 2000, 10s , f5.6 and 2850K). Here is the statement that I wrote for the project:",
        outstanding: "Ever since I discovered the stars I’ve enjoyed looking at them. I not only look at the start to see them, but also I attemp to discover something different from the last time. I also stare at them to seek peace. When I was a child my parents used to take me and my brothers to La Cerdanya; where it was easy to see and admire the stars. But lately I’ve seen little of them. Living in Barcelona makes it very difficult to look at the sky and see a clear sky with stars. That is why this photo series is focused on the night sky. I want to be able to see what is behind the reflected light of cities, but also to point out the misuse of artificial light that prevents us from seeing the stars.",
        text2: "At the moment, the project is still in process, so this is just a preview.",
        photos: [
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/ourNight/on1.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/ourNight/on2.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/ourNight/on3.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/ourNight/on4.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/ourNight/on5.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/photographer/personal/ourNight/on6.jpg",
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
