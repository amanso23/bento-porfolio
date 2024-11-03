
import type React from 'react';
import Redirect from '@icons/Redirect.tsx';


interface Props{ 
    children: React.ReactNode
    className?: string
    redirect?: boolean
}

const BentoCard = ({ className, redirect, children }: Props) => {
    return (
        <div className={`relative border border-primary rounded-[64px] py-6 px-8 bg-secondary overflow-hidden ${className}`}>
            {redirect && <Redirect className="absolute top-6 z-50 right-8 size-5 stroke-white transition-transform duration-200 transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
            {children}
        </div>
    )
}
export default BentoCard
