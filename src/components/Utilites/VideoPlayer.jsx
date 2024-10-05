"use client"

import { XCircle } from "@phosphor-icons/react"
import { useState } from "react"
import Youtube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevSteate) => !prevSteate)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button
                    onClick={handleVideoPlayer}
                    className="text-color-primary float-right bg-color-secondary px-3 mb-2">X</button>
                <Youtube
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                    onError={() => alert("Video is error, please try another video")}
                />
            </div>
        )
    }

    const ButtonPlayTrailer = () => {
        return <button
            onClick={handleVideoPlayer}
            className="rounded-xl fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl">
            Tonton trailer
        </button>
    }

    return isOpen ? <Player /> : <ButtonPlayTrailer/>
}

export default VideoPlayer