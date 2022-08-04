import Breadcrumbs from "nextjs-breadcrumbs"
import Container from "./Container"

const Breadcrumb = (): React.ReactElement => {

  return (
    <Container
      paddingVertical="pt-14"
      className="fixed inset-0 h-[12vh] z-50"
      backgroundColor="bg-white"
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
