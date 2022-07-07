import { PageType } from "../types"

const data: PageType = {
  meta: {
    title: "Dallonses base React/Next/TS project",
    description: "description",
    canonical: "",
    image: "",
  },
  language: "es",
  pageName: "home",
  components: [
    {
      name: "Start",
      key: "Start",
      props: {
        title: "Start project",
        text: "Base configuration of a Dallonses' project.",
        list: [
          "React, Next and Typescript project",
          "Tailwindcss implemented",
          "Basic components and types declarations",
          "Usefull hooks and helpers",
          "Mock data and real data processor",
        ],
      },
    },
  ],
}

module.exports = data
