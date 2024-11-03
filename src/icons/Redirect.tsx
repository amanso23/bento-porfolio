interface Props {
    className: string;
}

const Redirect: React.FC<Props> = ({ className }) => {
    return (
        <svg className={className} viewBox="0 0 26 26" >
            <path d="M8 18L18 8M18 8H8M18 8V18"  style={{ strokeOpacity: 1 }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Redirect

    