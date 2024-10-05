import Image from "next/image"
import Link from "next/link"
import Header from "@/components/dashboard/Header"

const Page = () => {
    return (
        <section className=" mt-4 w-full px-4">
            <Header title={"My Collections"}/>


            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/" className=" relative border border-color-accent">
                    <Image src="" alt="" width={350} height={350} className="w-full" />
                    <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
                        <h5 className="text-xl text-center">Judul Anime Judul Anime</h5>
                    </div>
                </Link>
                <Link href="/" className=" relative border border-color-accent">
                    <Image src="" alt="" width={350} height={350} className="w-full" />
                    <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
                        <h5 className="text-xl text-center">Judul Anime Judul Anime</h5>
                    </div>
                </Link>
                <Link href="/" className=" relative border border-color-accent">
                    <Image src="" alt="" width={350} height={350} className="w-full" />
                    <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
                        <h5 className="text-xl text-center">Judul Anime Judul Anime</h5>
                    </div>
                </Link>
                <Link href="/" className=" relative border border-color-accent">
                    <Image src="" alt="" width={350} height={350} className="w-full" />
                    <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
                        <h5 className="text-xl text-center">Judul Anime Judul Anime</h5>
                    </div>
                </Link>

            </div>
        </section>

    )

}

export default Page