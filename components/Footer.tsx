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
    <div className="flex flex-col md:flex-row md:justify-between md:items-end p-4 md:p-8">
      <div className="flex flex-col">
        <span className="font-bold">{title}</span>
        <span>{text}</span>
        <div>
          <span className="pr-1">{contact}</span>
          <a
            href="mailto:oriol@oromatu.com"
            className="border-b border-black"
          >
            {email}
          </a>
        </div>
      </div>
      <div>
        <span className="text-12 opacity-40">{copyright}</span>
      </div>
    </div>
  )
}

export default Footer
