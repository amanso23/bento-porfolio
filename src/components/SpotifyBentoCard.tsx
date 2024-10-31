import BentoCard from "@components/BentoCard";
import { useState, useRef, useEffect } from 'react';
import Volume from "./icons/Volume";
import Spotify from "./icons/Spotify";
import NoVolume from "./icons/NoVolume";
import { spotifyTrack } from "@lib/spotifyTrack";

const SpotifyBento = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [mute, setIsMute] = useState(true);

    const handleClick = () => {
        setIsMute(!mute);
    };

    useEffect(() => {
        if(audioRef.current){
            audioRef.current.play();
        }
    }, [mute]);

    return (
        <BentoCard className="overflow-hidden relative">
            <a href="https://open.spotify.com/intl-es/track/0e7ipj03S05BNilyu5bRzt" className="absolute z-50 top-6 left-8">
                <Spotify className="size-5" />
            </a>
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                loop
                autoPlay
                muted
            >
                <source src={spotifyTrack.preview} type="video/mp4" />
            </video>

            <audio 
                ref={audioRef}
                className="hidden"
                loop
                autoPlay
                muted={mute}
            >
                <source src={spotifyTrack.audio} type="audio/mp3" />
            </audio>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <div className="flex justify-between items-center mb-2">
                    <div className="text-white">
                        <h2 className="text-lg font-bold">{spotifyTrack.name}</h2>
                        <p className="text-xs opacity-75 mt-[-4px]">{spotifyTrack.artist}</p>
                    </div>
                    <button onClick={handleClick} className="fill-white">
                        {mute ? <NoVolume className="size-4" /> : <Volume className="size-4" />}
                    </button>
                </div>
            </div>
        </BentoCard>
    );
}

export default SpotifyBento;
