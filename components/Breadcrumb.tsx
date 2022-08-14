import Breadcrumbs from "nextjs-breadcrumbs"
import Container from "./Container"

const Breadcrumb = (): React.ReactElement => {
  return (
    <Container
      paddingVertical="pt-16"
      className="fixed inset-0 h-[13vh] sbs:h-[11vh] z-50"
      backgroundColor="bg-white"
    >
      <Breadcrumbs
        rootLabel="Home"
        listClassName="flex gap-x-2 font-light"
        activeItemClassName="underlineAnimation"
        inactiveItemClassName="opacity-50"
      />
    </Container>
  )
}

export default Breadcrumb
