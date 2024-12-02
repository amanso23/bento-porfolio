import { useEffect, useState } from "react"
import BentoCard from "@components/BentoCard"
import { location } from "@lib/location"
import { country } from "src/const"
import Redirect from "@icons/Redirect"

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
        return `${region}, ${countryValue}`.toUpperCase()
        // return `${city}, ${region}, ${countryValue}`.toUpperCase()
    }

    const [currentTime, setCurrentTime] = useState<Date | null>(null)

    const getGreeting = () => {
        if (!currentTime) return ""
        const hours = currentTime.getHours()
        if (hours < 14) return "¡Buenos días!"
        if (hours < 20) return "¡Buenas tardes!"
        return "¡Buenas noches!"
    }

    const getPicture = () => {
        if (!currentTime) return ""
        const hours = currentTime.getHours()
        if (hours < 18) return "images/time/morning.webp"
        if (hours < 20) return "images/time/late-night.webp"
        return "images/time/evening.avif"
    }

    const regionConfig = `${language}-${region}`

    const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Atlantic/Canary',
    }

    useEffect(() => {
        setCurrentTime(new Date())
        const timer = setInterval(() => setCurrentTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    const seconds = currentTime?.getSeconds().toString().padStart(2, '0')

    return (
        <BentoCard className="col-span-1 row-span-1 overflow-hidden">
            {/* Imagen con efecto Skeleton */}
            <div className="absolute top-0 left-0 w-full h-full object-cover">
                {getPicture() ? (
                    <img
                        src={getPicture() || "images/time/morning.webp"}
                        alt="picture"
                        className="w-full h-full object-cover z-0"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 animate-pulse z-0"></div>
                )}
            </div>

            <div className="grid place-items-start h-full font-bold z-50 relative">
                {getGreeting() ? (
                    <h2 className="text-4xl">{getGreeting()}</h2>
                ) : (
                    <div className="w-3/4 h-8 bg-gray-200 animate-pulse rounded-full"></div>
                )}

                {currentTime ? (
                    <div className="flex items-center gap-x-1">
                        <h1 className="text-6xl">{currentTime.toLocaleTimeString(regionConfig, options)}</h1>
                        <p className="text-3xl mt-5">{seconds}</p>
                    </div>
                ) : (
                    <div className="flex items-center gap-x-1">
                        <div className="w-1/2 h-10 bg-gray-200 animate-pulse rounded-full"></div>
                        <div className="w-10 h-6 bg-gray-200 animate-pulse rounded-full mt-3"></div>
                    </div>
                )}
                {getLocation() ? (
                    <a
                        href={linkToMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group uppercase backdrop-blur-sm bg-white/40 px-3 py-2 rounded-full transition-colors duration-200 hover:bg-white/60 text-sm"
                    >
                        {getLocation()}
                        <Redirect className="stroke-white inline-block size-5 mb-[2px] ml-1 transition-transform duration-300 group-hover:transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>
                ) : (
                    <div className="w-1/3 h-10 bg-gray-200 animate-pulse rounded-full"></div>
                )}
            </div>
        </BentoCard>

    )
}

export default BentoTimeCard
