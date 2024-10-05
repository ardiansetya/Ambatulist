import Image from "next/image"
import Link from "next/link"
import { authUserSession } from "./page"

export { authUserSession } from "@/libs/auth-libs"
const Page = async () => {
    const user = await authUserSession()
    console.log(user)
    return (
        <div className="mt-8 text-color-primary flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold">Welcome, {user?.name}</h5>
            <Image src={user?.image} alt="..." width="300" height="300"
            />

            <div className="flex flex-wrap py-8 gap-4">
                <Link href="/users/dashboard/collection" className="rounded-lg bg-color-accent text-color-dark text-xl font-bold px-4 py-3" >My Collections</Link>
                <Link href="/users/dashboard/rating" className="rounded-lg  bg-color-accent text-color-dark text-xl font-bold px-4 py-3" >My Rating</Link>
                <Link href="/users/dashboard/comment" className="bg-color-accent rounded-lg  text-color-dark text-xl font-bold px-4 py-3" >My Comment</Link>
            </div>
        </div>

    )
}

export default Page