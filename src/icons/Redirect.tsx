interface Props {
    className: string;
}

const Redirect: React.FC<Props> = ({ className }) => {
    return (
        <svg className={className} viewBox="0 0 26 26" >
            <path d="M8 18L18 8M18 8H8M18 8V18" stroke="#B3B3B3" style={{ stroke: 'white', strokeOpacity: 1 }} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default Redirect

    