import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilites/VideoPlayer"
import Image from "next/image"

const page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    console.log(anime)
    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-2xl text-color-primary">{anime.data.title} - {anime.data.year}</h3>
            </div>
            <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
                <div className="p-2 w-36 flex flex-col justify-center items-center rounded border border-color-primary">
                    <h3>RANK</h3>
                    <p> {anime.data.rank} </p>
                </div>
                <div className="p-2 w-36 flex flex-col justify-center items-center rounded border border-color-primary">
                    <h3>SCORE</h3>
                    <p> {anime.data.score} </p>
                </div>
                <div className="p-2 w-36 flex flex-col justify-center items-center rounded border border-color-primary">
                    <h3>MEMBERS</h3>
                    <p> {anime.data.members} </p>
                </div>
                <div className="p-2 w-36 flex flex-col justify-center items-center rounded border border-color-primary">
                    <h3>EPISODES</h3>
                    <p> {anime.data.episodes} </p>
                </div>

            </div>
            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
                <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={250} height={250} className="w-full rounded object-cover" />
                <p className="text-justify text-xl">{anime.data.synopsis}</p>

            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
            </div>
        </>
    )
}

export default page