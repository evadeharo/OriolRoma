import Image from "next/image"

type Props = {
  title: string
  text: string
  list: Array<string>
}

const Start = ({ title, text, list }: Props): React.ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <Image src="/assets/logo.png" alt="Dallonses" width={111} height={129} />
      <h1 className="mt-10 mb-2 text-3xl">{title}</h1>
      <p className="mb-4 text-xl">{text}</p>
      <ul>
        {list.map((item) => (
          <li key={item} className="flex items-center mb-1">
            <div className="w-2 h-2 mr-3 bg-black rounded-full" /> {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Start
