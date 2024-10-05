import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"

const UserActionButton = async () => {
    const user = await authUserSession()
    const userLabel = user ? "Sign Out" : "Sign In"
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin"
    console.log(user)
    return (
        <div className="flex gap-5 justify-between">
            {
                user ? <Link href="/users/dashboard" className="bg-color-dark text-color-accent py-3 px-12 rounded-lg inline-block">Dashboard</Link> : null
            }
            <Link href={actionUrl} className="bg-color-dark text-color-accent py-3 px-12 rounded-lg inline-block">{userLabel}</Link>
        </div>
    )
}

export default UserActionButton