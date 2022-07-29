type Props = {
    children: React.ReactNode
    className?: string
    id?: string
}

const DesignersComponent: React.FC<Props> = ({
    children,
    className = "",
    id = "",
}: Props): React.ReactElement => {
    return (
        <div>Hola</div>
    )
}

export default DesignersComponent
