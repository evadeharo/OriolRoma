import Breadcrumbs from "nextjs-breadcrumbs"
import Container from "./Container"

const Breadcrumb = (): React.ReactElement => {

  return (
    <Container
      paddingVertical="pt-16"
      className="fixed inset-0 h-24 z-50"
      backgroundColor="bg-gray-300"
    >
      <Breadcrumbs
        rootLabel="Home"
        listClassName="flex gap-x-2 font-light"
        activeItemClassName="underline"
        inactiveItemClassName="opacity-50"
      />
    </Container>
  )
}

export default Breadcrumb
