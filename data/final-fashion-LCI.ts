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
  pageName: "final-fashion-LCI",
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
      name: "PhotographyGridMixedSizes",
      key: "PhotographyGridMixedSizes",
      props: {
        title: "Shooting for LCI Barcelona 2020-2021",
        text: `Every year LCI Barcelona organizes a fashion show for its last year fashion design students. Due to Covid-19 restrictions in 2021 was not possible to do it, so they decided to do a 4-day shooting instead.\nThe shooting took place in Top Studios, and the 53 fashion collections were photographed by a team of 5 photographers.`,
        text2: `**Head of Photography**
        \nSalvatore Elefante
        \n**Digital Tech**
        \nOriol Roma i Turull`,
        text3: `**Photographers**
        \nRenate Canga
        \nHeidi Cavazos García
        \nAnderson Galindo Clavijo
        \nAlba Martín Chacón`,
        photos: [
          {
            image: imageModule({
              src: "/assets/images/digitalTech/portada.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3.jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(2).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(3).jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(4).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(5).jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(6).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(7).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(8).jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(9).jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(10).jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(11).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(12).jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(13).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(14).jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(15).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(16).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(17).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(18).jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(19).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(20).jpg",
              width: 1200,
              height: 700,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(21).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(22).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(23).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(24).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(25).jpg",
              width: 1365,
              height: 2048,
            }),
          },
          {
            image: imageModule({
              src: "/assets/images/digitalTech/LCI/bloque3(26).jpg",
              width: 1365,
              height: 2048,
            }),
          },
        ],
      },
    },
    {
      name: "DesignersComponent",
      key: "DesignersComponent",
      props: {
        title: "Designers",
        day1: "Day 1",
        day2: "Day 2",
        day3: "Day 3",
        day4: "Day 4",
        textRow1: [
          "Alexandra Alonso",
          "Ruben Arranz",
          "Gerard Aznar",
          "Marc Bartomeu",
          "Jin Bing",
          "Roger Iniesta",
          "Aleix Martos",
          "Camelia Rendón",
          "Carla Sanchez",
          "Miquel Torralva",
          "Kevin Torrente",
        ],
        textRow2: [
          "Miriam Bautista",
          "Rocio Berrondo",
          "Anna Bieto",
          "Marino Castro",
          "Paula Hidalgo",
          "Irene Ibarz",
          "Maline Latorre",
          "Marta Llorens",
          "Aída Mateo",
          "Anna Paez",
          "Ariadna Ruiz",
          "Roser Samblas",
          "Anna Santos",
        ],
        textRow3: [
          "Claudia Brugat",
          "Maria Cadanet",
          "Carla Calbet",
          "Sara Calero",
          "Cristina Casas",
          "Emma Dobarco",
          "Olga Durán",
          "María García",
          "Mariona Granollers",
          "Claudia Gutiérrez",
          "Claudia Lavado",
          "Mar Mondelo",
          "Andrea Oliva",
          "Julia Pagespetit",
          "Mónica Pérez",
          "Nuria Sans",
        ],
        textRow4: [
          "Inés Aldrey",
          "Sara Bailac",
          "Adriana Bertomeu",
          "Sonia Cuesta",
          "Estefania Emperador",
          "Estela García",
          "Neus García",
          "Carla Lázaro",
          "Nerea Llobregat",
          "Blanca López",
          "Silvia Martí",
          "Regina Pera",
          "Gemma Torrent",
        ],
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
        email: "oriol@oromatu.com",
      },
    },
  ],
}

module.exports = data
