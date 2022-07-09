type Props = {
  title: string
  text: string
  copyright: string
  contact: string
  email: string
}

const Footer = ({
  title,
  text,
  copyright,
  contact,
  email,
}: Props): React.ReactElement => {
  return (
    <div className="flex justify-between items-end p-8">
      <div className="flex flex-col">
        <span className="font-bold">{title}</span>
        <span>{text}</span>
        <div>
          <span className="pr-1">{contact}</span>
          <span>{email}</span>
        </div>
      </div>
      <div>
        <span className="text-12">{copyright}</span>
      </div>
    </div>
  )
}

export default Footer
