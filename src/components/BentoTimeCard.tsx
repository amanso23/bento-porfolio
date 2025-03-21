import { useEffect, useState } from "react";
import BentoCard from "@components/BentoCard";
import { location } from "@lib/location";
import { country } from "src/const";
import Redirect from "@icons/Redirect";
import type { Data } from "src/types";

const BentoTimeCard = () => {
  const [data, setData] = useState<Data | null>(null);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);

  const { linkToMaps, region, country: countryKey, language } = location;

  const getLocation = () => {
    const countryValue = country[countryKey];
    return `${region}, ${countryValue}`.toUpperCase();
  };

  const getGreeting = (time: Date) => {
    const hours = time.getHours();
    if (hours < 14) return "¡Buenos días!";
    if (hours < 20) return "¡Buenas tardes!";
    return "¡Buenas noches!";
  };

  const getPicture = (time: Date) => {
    const hours = time.getHours();
    if (hours < 18) return "images/time/morning.webp";
    if (hours < 20) return "images/time/late-night.webp";
    return "images/time/evening.avif";
  };

  const regionConfig = `${language}-${region}`;

  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Atlantic/Canary",
  };

  useEffect(() => {
    const now = new Date();
    setCurrentTime(now);

    setData({
      picture: getPicture(now),
      greeting: getGreeting(now),
      location: getLocation(),
    });

    setLoading(false);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  const seconds = currentTime?.getSeconds().toString().padStart(2, "0");

  return (
    <BentoCard className="col-span-1 row-span-1 overflow-hidden">
      {loading ? (
        <div className="animate-pulse">
          {/* <div className="absolute top-0 left-0 w-full h-full bg-gray-200 z-0"></div>
                    <div className="grid place-items-start h-full font-bold z-50 relative p-4">
                        <div className="w-3/4 h-8 bg-gray-200 rounded mb-4"></div>
                        <div className="flex items-center gap-x-1">
                            <div className="w-1/2 h-10 bg-gray-200 rounded"></div>
                            <div className="w-10 h-6 bg-gray-200 rounded mt-3"></div>
                        </div>
                        <div className="w-1/3 h-10 bg-gray-200 rounded mt-4"></div>
                    </div> */}
        </div>
      ) : (
        <>
          <picture className="absolute top-0 left-0 w-full h-full object-cover">
            <img
              src={data?.picture || ""}
              alt="picture"
              className="w-full h-full object-cover z-0"
            />
          </picture>
          <div className="grid place-items-start h-full font-bold z-50 relative">
            <h2 className="text-4xl">{data?.greeting}</h2>
            {currentTime && (
              <div className="flex items-center gap-x-1">
                <h1 className="text-6xl">
                  {currentTime.toLocaleTimeString(regionConfig, options)}
                </h1>
                <p className="text-3xl mt-5">{seconds}</p>
              </div>
            )}
            <a
              href={linkToMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="group uppercase backdrop-blur-sm bg-white/40 px-3 py-2 rounded-full transition-colors duration-200 hover:bg-white/60 text-sm"
              title="Open in Google Maps"
            >
              {data?.location}
              <Redirect className="stroke-white inline-block size-5 mb-[2px] ml-1 transition-transform duration-300 group-hover:transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </>
      )}
    </BentoCard>
  );
};

export default BentoTimeCard;
