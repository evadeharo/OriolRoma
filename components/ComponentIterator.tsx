import type { ModuleType } from "types/common"

type Props = {
  modules: ModuleType[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extraProps?: any
  pageName?: string
}
const components = {}

const ComponentIterator: React.FC<Props> = ({
  pageName,
  modules,
  extraProps = {},
}): React.ReactElement => {
  modules.forEach((module) => {
    if (typeof components[module.name] === "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      components[module.name] = require("./" + module.name + ".tsx").default
    }
  })

  const moduleNames = []
  let repeatedModuleName
  let repeatCounter = 0
  return (
    <>
      {modules.map((m, index) => {
        // Find repeated modules in the same page (used to apply colors by position)
        if (moduleNames.includes(m.name)) {
          moduleNames.push(m.name)
          repeatedModuleName = m.name
          repeatCounter++
        } else {
          moduleNames.push(m.name)
        }

        if (typeof components[m.name] === "undefined") {
          console.log(`Module not found: ${m.name}`)
          return (
            <span
              key={index}
              style={{ display: "none" }}
              data-error={`Module not found: ${m.name}`}
            />
          )
        }
        const Component = components[m.name]
        return (
          <Component
            {...m.props}
            key={m.key}
            index={index}
            moduleKey={m.key}
            {...extraProps}
            pageName={pageName}
            repeatedModulePosition={
              m.name === repeatedModuleName ? repeatCounter + 1 : 1
            }
          >
            {m.structure && (
              <ComponentIterator
                index={index}
                modules={m.structure}
                pageName={pageName}
                {...extraProps}
              />
            )}
          </Component>
        )
      })}
    </>
  )
}

export default ComponentIterator
