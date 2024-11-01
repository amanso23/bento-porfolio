import { useEffect, useState } from "react"
import BentoCard from "@components/BentoCard"
import { location } from "@lib/location"
import { country } from "src/const"

const BentoTimeCard = () => {

    const {
        linkToMaps,
        city,
        region,
        country: countryKey,
        language
    } = location

    const getLocation = () => {
        const countryValue = country[countryKey]
        return `${city}, ${region}, ${countryValue}`.toUpperCase()
    }

    const [currentTime, setCurrentTime] = useState(new Date())

    const getGreeting = () => {
        const hours = currentTime.getHours()
        if(hours < 12) return " ¡Buenos días!"
        if(hours < 20) return "¡Buenas tardes!"
        return "¡Buenas noches!"
    }

    
    const regionConfig = `${language}-${region}`

    const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Atlantic/Canary',
    }
    
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <BentoCard className="col-span-2 row-span-1 overflow-hidden transition-opacity duration-200 hover:opacity-80 group" redirect>
            <a href={linkToMaps} target="_blank" rel="noopener noreferrer">
                <picture className="absolute top-0 left-0 w-full h-full object-cover">
                    <img src="images/blue-sky.webp" alt="starry-sky" className="w-full object-cover z-0" />
                </picture>
                <div className="flex flex-col  items-start font-bold z-50 relative " >
                    <h2 className="text-5xl">{getGreeting()}</h2>
                    <h1 className="text-8xl">{currentTime.toLocaleTimeString(regionConfig, options)}</h1>
                    <p className="text-lg uppercase backdrop-blur-md bg-white/20 px-4 py-2 rounded-full">{getLocation()}</p>
                </div>
            </a>     
        </BentoCard>
    )
}

export default BentoTimeCard