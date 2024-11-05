
import type React from 'react';
import Redirect from '@icons/Redirect.tsx';


interface Props{ 
    children: React.ReactNode
    className?: string
}

const BentoCard = ({ className, children }: Props) => {
    return (
        <div className={`relative border border-primary rounded-[64px] py-6 px-8 bg-secondary overflow-hidden ${className && className} animate-fade-in`}>
            {children}
        </div>
    )
}
export default BentoCard
