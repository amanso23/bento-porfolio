
import Redirect from './icons/Redirect.astro';


interface Props{ 
    children: any
    className: string
    redirect?: boolean
}


const BentoCard = ({ className, redirect, children }: Props) => {
    return (
        <div className={`border border-primary rounded-[64px] py-8 px-10 bg-secondary ${className}`}>
            {redirect && <Redirect class="absolute top-8 right-12 size-5" />}
            {children}
        </div>
    )
}

export default BentoCard


